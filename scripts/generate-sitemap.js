#!/usr/bin/env node

/**
 * Script to automatically generate sitemap.xml with current date
 * This ensures lastmod dates are always up to date
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://vule.dev';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Site structure with priorities and change frequencies
const sitePages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    description: 'Homepage - Main portfolio landing page'
  },
  {
    url: '/#about',
    priority: '0.9',
    changefreq: 'monthly',
    description: 'About Section - Professional background and experience'
  },
  {
    url: '/#skills',
    priority: '0.8',
    changefreq: 'monthly',
    description: 'Skills Section - Technical expertise and capabilities'
  },
  {
    url: '/#projects',
    priority: '0.9',
    changefreq: 'weekly',
    description: 'Projects Section - Portfolio of work and achievements'
  },
  {
    url: '/#contact',
    priority: '0.7',
    changefreq: 'monthly',
    description: 'Contact Section - Get in touch information'
  }
];

// Generate sitemap XML content
const generateSitemap = () => {
  const currentDate = getCurrentDate();
  
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

`;

  // Add each page to sitemap
  sitePages.forEach(page => {
    sitemapContent += `  <!-- ${page.description} -->
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>

`;
  });

  sitemapContent += `</urlset>`;
  
  return sitemapContent;
};

// Generate robots.txt content
const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemap location
Sitemap: ${SITE_URL}/sitemap.xml

# Allow all search engines to crawl the site
# Disallow crawling of any admin or private areas (none in this case)

# Crawl-delay for polite crawling (optional)
Crawl-delay: 1

# Allow crawling of CSS and JS files for better rendering
User-agent: Googlebot
Allow: /assets/

User-agent: Bingbot
Allow: /assets/

# Social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Generated on: ${new Date().toISOString()}`;
};

// Main execution
console.log('🗺️  Generating sitemap and robots.txt...');

try {
  // Generate and write sitemap.xml
  const sitemapContent = generateSitemap();
  fs.writeFileSync(OUTPUT_PATH, sitemapContent, 'utf8');
  console.log('✅ Generated sitemap.xml with current date:', getCurrentDate());

  // Generate and write robots.txt
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  const robotsContent = generateRobotsTxt();
  fs.writeFileSync(robotsPath, robotsContent, 'utf8');
  console.log('✅ Updated robots.txt with current timestamp');

  // Validate sitemap
  const sitemapSize = fs.statSync(OUTPUT_PATH).size;
  console.log(`📊 Sitemap size: ${sitemapSize} bytes`);
  console.log(`📋 Total pages: ${sitePages.length}`);
  
  console.log('\n🎉 SEO files generated successfully!');
  console.log(`🌐 Sitemap URL: ${SITE_URL}/sitemap.xml`);
  console.log(`🤖 Robots URL: ${SITE_URL}/robots.txt`);

} catch (error) {
  console.error('❌ Error generating SEO files:', error);
  process.exit(1);
} 