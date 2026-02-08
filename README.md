# Dhwayam

A complete, responsive, production-ready web application for Dhwayam, a Gen Z-led Carnatic fusion band that uses music as a tool for social impact through fundraising concerts and community outreach.

## 🎵 About Dhwayam

Dhwayam is a nonprofit-style music and social impact organization that bridges tradition with contemporary purpose. Through their two main initiatives - **Harmony for Hope** and **Together Through Music** - they create meaningful change in communities while celebrating the beauty of Carnatic fusion music.

## 🌟 Features

### Pages

- **Home**: Hero section, impact stats, featured initiatives, recent highlights, upcoming events
- **About**: Mission statement, band story, founders, advisors, photo gallery
- **Initiatives**: Detailed information about Harmony for Hope and Together Through Music programs
- **Impact**: Social impact metrics, case studies, transparency reporting
- **Events**: Upcoming and past events with detailed information
- **Booking**: Comprehensive booking inquiry form for public/private events
- **Contact**: Contact form and information

### Design & UX

- **Dark, elegant theme** with warm accent colors (gold/maroon/deep red)
- **Mobile-first, fully responsive** design
- **Accessibility compliant** with proper ARIA labels and semantic HTML
- **Clean typography** with serif headings and sans-serif body text
- **Card-based layouts** with subtle hover animations
- **Music-inspired animations** and smooth transitions
- **Count-up animations** for impact statistics

### Technical Features

- **React 19** with modern hooks and patterns
- **React Router** for client-side navigation
- **Framer Motion** for smooth animations and transitions
- **Tailwind CSS** for utility-first styling
- **Lucide React** for consistent iconography
- **Intersection Observer** for scroll-triggered animations
- **SEO-optimized** structure with proper meta tags
- **Production-ready** code with modular components

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dhwayam
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Design System

### Colors

- **Primary**: Gray scale (900-100) for backgrounds and text
- **Accent**: Gold/Yellow (500-600) for highlights and CTAs
- **Maroon**: Deep red (600-700) for secondary accents
- **Gradients**: Used for text highlights and hero sections

### Typography

- **Headings**: Playfair Display (serif) for elegance and tradition
- **Body**: Inter (sans-serif) for readability and modernity
- **Responsive sizing** with mobile-first approach

### Components

- **Buttons**: Primary (filled) and secondary (outlined) variants
- **Cards**: Elevated with hover effects and rounded corners
- **Forms**: Dark theme with accent-colored focus states
- **Navigation**: Fixed header with smooth scroll and active states

## 📱 Responsive Design

The website is fully responsive across all device sizes:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large screens**: 1280px and up

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus management for modals and forms

## 🎯 Key Initiatives

### Harmony for Hope

Fundraising concert series supporting:

- Youth healthcare initiatives
- Medical equipment & prosthetics
- Educational health programs
- Community health awareness

### Together Through Music

Community outreach program featuring:

- Live performances at senior centers
- Interactive musical experiences
- Cultural education & storytelling
- Intergenerational connections

## 📊 Impact Metrics

The website showcases real impact data:

- **$15,000+** total funds raised
- **500+** lives directly impacted
- **25+** events completed
- **12** partner organizations

## 🤝 Booking & Contact

### Booking Process

- Comprehensive inquiry form
- Event type selection
- Budget and requirements specification
- 24-hour response guarantee

### Contact Information

- **Email**: dhwayamfoundation@gmail.com
- **Location**: Seattle, Washington
- **Response Time**: Within 24 hours

## 🛠 Development

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── CountUp.jsx     # Animated counter
│   └── AnimatedSection.jsx # Scroll animations
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About us page
│   ├── Initiatives.jsx # Programs page
│   ├── Impact.jsx      # Impact metrics
│   ├── Events.jsx      # Events listing
│   ├── Booking.jsx     # Booking form
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

### Key Dependencies

- `react` & `react-dom`: Core React library
- `react-router-dom`: Client-side routing
- `framer-motion`: Animation library
- `react-intersection-observer`: Scroll-triggered animations
- `lucide-react`: Icon library
- `tailwindcss`: Utility-first CSS framework

## 🚀 Deployment

The application is ready for deployment to any static hosting service:

- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Free hosting for public repos
- **AWS S3**: Scalable cloud hosting

## 📄 License

This project is created for Dhwayam Foundation. All rights reserved.

## 🎵 Brand Voice

The website maintains Dhwayam's brand voice:

- **Emotional but professional**
- **Youthful, inclusive, community-focused**
- **Trust-driven and impact-oriented**
- **Celebrating tradition while embracing innovation**

---

_"Music has the power to heal, unite, and inspire. We're here to harness that power for the greater good, one performance at a time."_ - Dhwayam
