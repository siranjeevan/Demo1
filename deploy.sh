#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Deploy to Firebase Hosting
echo "Deploying to Firebase Hosting..."
firebase deploy --only hosting

echo "Deployment complete! Your website is live at:"
echo "https://dhwayam-3a777.web.app"