# 🚀 Dhwayam Website - GitHub Pages Deployment Guide

## Quick Deployment Steps

### 1. **Create GitHub Repository**
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Dhwayam website ready for deployment"

# Add GitHub remote (replace with your actual repository URL)
git remote add origin https://github.com/h3-services/dhwayam.git

# Push to GitHub
git push -u origin main
```

### 2. **Update Configuration**
Before deploying, update these files with your actual GitHub username:

**package.json** - Update the homepage URL:
```json
"homepage": "https://YOURUSERNAME.github.io/dhwayam"
```

**vite.config.js** - Update the base path:
```javascript
base: '/dhwayam/'
```

### 3. **Deploy Options**

#### Option A: Manual Deployment
```bash
# Build and deploy manually
npm run deploy
```

#### Option B: Automatic Deployment (Recommended)
The GitHub Actions workflow will automatically deploy when you push to main/master branch.

#### Option C: Using the deployment script
```bash
# Make script executable and run
chmod +x deploy.sh
./deploy.sh
```

## 🔧 Configuration Files Created

### 1. **package.json** - Added deployment scripts
- `predeploy`: Builds the project before deployment
- `deploy`: Deploys to GitHub Pages using gh-pages

### 2. **vite.config.js** - Added GitHub Pages configuration
- `base`: Sets the base path for GitHub Pages
- `build.outDir`: Specifies output directory

### 3. **GitHub Actions** - `.github/workflows/deploy.yml`
- Automatic deployment on push to main/master
- Builds and deploys using GitHub Actions

## 📋 Prerequisites

1. **Node.js** installed (v16 or higher)
2. **GitHub account** and repository created
3. **Git** installed and configured

## 🌐 After Deployment

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Ensure source is set to **Deploy from a branch**
4. Select **gh-pages** branch
5. Your website will be available at: `https://h3-services.github.io/dhwayam`

## 🔍 Troubleshooting

### Common Issues:

1. **404 Error**: Check that the base path in `vite.config.js` matches your repository name
2. **Assets not loading**: Ensure all image imports use relative paths
3. **Routing issues**: React Router may need additional configuration for GitHub Pages

### Solutions:

1. **For routing issues**, add this to your `public` folder as `_redirects`:
```
/*    /index.html   200
```

2. **For 404 pages**, create `public/404.html`:
```html
<!DOCTYPE html>
<html>
<head>
  <script>
    window.location.href = '/dhwayam/';
  </script>
</head>
</html>
```

## 📱 Features Included

- ✅ Responsive design
- ✅ Two-color professional theme (#1F3A34, #F4F8F9)
- ✅ Smooth animations with Framer Motion
- ✅ Contact forms and booking system
- ✅ Impact tracking and event management
- ✅ SEO-optimized structure

## 🎯 Next Steps

1. **Custom Domain** (Optional): Add a CNAME file to public folder
2. **Analytics**: Add Google Analytics or similar
3. **SEO**: Add meta tags and sitemap
4. **Performance**: Optimize images and add lazy loading

---

**Your Dhwayam website is now ready for the world! 🎵✨**