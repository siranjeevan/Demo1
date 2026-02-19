/**
 * DHWAYAM EVENTS DATA API
 * Fetches events from Google Sheets and returns them as a structured JSON.
 *
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Replace all code in the script editor with this file.
 * 4. Run the 'setupSheet' function once to create headers.
 * 5. Deploy as Web App (Execute as: Me, Access: Anyone).
 */

const SHEET_NAME = "Events";

function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      sheet = setupSheet();
    }

    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1);

    const events = rows.map((row) => {
      let obj = {};
      headers.forEach((header, i) => {
        // Map headers to camelCase keys for the React frontend
        const key = header
          .toString()
          .trim()
          .toLowerCase()
          .replace(/([-_][a-z])/g, (group) =>
            group.toUpperCase().replace("-", "").replace("_", ""),
          );
        obj[key] = row[i];
      });
      return obj;
    });

    // Filter into Upcoming and Past categories
    const result = {
      upcomingEvents: events.filter(
        (ev) => ev.status?.toString().toLowerCase() === "upcoming",
      ),
      pastEvents: events.filter(
        (ev) => ev.status?.toString().toLowerCase() === "past",
      ),
    };

    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
      ContentService.MimeType.JSON,
    );
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: error.toString() }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Run this function once manually in the Apps Script editor
 * to automatically create the sheet, formatting, and headers.
 */
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  } else {
    sheet.clear();
  }

  // Define these headers EXACTLY to match the React code requirements
  const headers = [
    "id",
    "status",
    "title",
    "date",
    "time",
    "location",
    "initiative",
    "partner",
    "description",
    "impact",
    "fundsRaised",
    "image",
    "ticketInfo",
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Formatting Headers
  sheet
    .getRange(1, 1, 1, headers.length)
    .setFontWeight("bold")
    .setBackground("#00475b")
    .setFontColor("white")
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle");

  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 40); // Taller header row

  // Add sample data
  const sampleData = [
    [
      "1",
      "upcoming",
      "SEEEDS Educational NonProfit Fundraiser",
      "March 15, 2026",
      "7:00 PM - 9:00 PM",
      "Seattle Community Center",
      "Harmony for Hope",
      "SEEEDS",
      "Join us for an evening of Carnatic fusion music supporting educational initiatives for underserved youth.",
      "",
      "",
      "",
      "Suggested donation: $25",
    ],
    [
      "2",
      "past",
      "Sankara Healthcare Fundraiser",
      "November 18, 2025",
      "",
      "Redmond Community Hall",
      "Harmony for Hope",
      "Sankara Healthcare",
      "A powerful evening of Carnatic fusion music that raised funds to provide prosthetics.",
      "100 children received prosthetics",
      "$8,000",
      "",
      "",
    ],
  ];

  sheet
    .getRange(2, 1, sampleData.length, sampleData[0].length)
    .setValues(sampleData);

  // Advanced Professional Styling
  const totalRows = sheet.getMaxRows();
  const range = sheet.getRange(2, 1, sampleData.length, headers.length);

  range.setVerticalAlignment("middle").setFontFamily("Arial").setFontSize(10);

  // Set Column Widths (Professional Spacing)
  sheet.setColumnWidth(1, 40); // ID
  sheet.setColumnWidth(2, 80); // Status
  sheet.setColumnWidth(3, 200); // Title
  sheet.setColumnWidth(4, 120); // Date
  sheet.setColumnWidth(5, 120); // Time
  sheet.setColumnWidth(6, 150); // Location
  sheet.setColumnWidth(7, 130); // Initiative
  sheet.setColumnWidth(8, 130); // Partner
  sheet.setColumnWidth(9, 300); // Description (Wide)
  sheet.setColumnWidth(10, 200); // Impact
  sheet.setColumnWidth(11, 100); // FundsRaised
  sheet.setColumnWidth(12, 150); // Image (URL placeholder)
  sheet.setColumnWidth(13, 120); // TicketInfo

  // Wrap text for long columns
  sheet.getRange("C:C").setWrap(true); // Title
  sheet.getRange("I:I").setWrap(true); // Description
  sheet.getRange("J:J").setWrap(true); // Impact

  // Set default row height for data
  sheet.setRowHeights(2, sampleData.length, 60);

  return sheet;
}
