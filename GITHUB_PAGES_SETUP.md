# 🚀 GitHub Pages Deployment Guide

## 📋 Setup Instructions

### 1. Repository Settings
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Repository Name Configuration
If your repository name is **NOT** `profile`, update the `base` in `vite.config.ts`:

```typescript
// If repo name is "my-portfolio"
base: '/my-portfolio/',

// If using custom domain
base: '/',
```

### 3. Deploy Commands

```bash
# Build for GitHub Pages
npm run build:gh

# Or regular build (includes MIME fix)
npm run build

# Test locally before deploy
npm run preview
```

### 4. Auto Deployment
- Push to `main` or `master` branch
- GitHub Actions will automatically build and deploy
- Check **Actions** tab for deployment status

## 🔧 MIME Type Fixes Applied

### Files Created:
- ✅ `.github/workflows/deploy.yml` - Auto deployment
- ✅ `public/.nojekyll` - Disable Jekyll processing  
- ✅ `scripts/fix-mime-types.js` - Post-build MIME fixes
- ✅ Updated `vite.config.ts` with GitHub Pages config

### What the fixes do:
1. **Disable Jekyll**: `.nojekyll` prevents GitHub from processing files
2. **Proper Extensions**: Ensures `.js` files have correct extensions
3. **Module Loading**: Updates `index.html` with proper `type="module"`
4. **File Naming**: Uses explicit file extensions in build output

## 🌐 Access Your Site

After deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/profile/
```

Or if using custom domain:
```
https://your-custom-domain.com
```

## 🐛 Troubleshooting

### Still getting MIME errors?
1. Check if `.nojekyll` exists in the deployed site
2. Verify `base` path in `vite.config.ts` matches repo name
3. Clear browser cache and try again
4. Check GitHub Actions logs for build errors

### 404 Errors?
1. Ensure repository name matches `base` config
2. Check if files are properly uploaded to `gh-pages` branch
3. Verify GitHub Pages source is set to "GitHub Actions"

### Build Failures?
1. Check Node.js version in workflow (currently set to 18)
2. Verify all dependencies are in `package.json`
3. Check Actions tab for detailed error logs

## 📝 Notes

- First deployment may take 5-10 minutes
- Subsequent deployments are usually faster (2-3 minutes)
- GitHub Pages has a size limit of 1GB per repository
- Custom domains require DNS configuration

## 🎯 Next Steps

1. **Custom Domain** (optional):
   - Add `CNAME` file to `public/` folder
   - Configure DNS settings
   - Update `base: '/'` in `vite.config.ts`

2. **SEO Optimization**:
   - Add `sitemap.xml`
   - Configure `robots.txt`
   - Add meta tags for social sharing

3. **Performance**:
   - Enable GitHub Pages CDN
   - Optimize images and assets
   - Monitor Core Web Vitals 