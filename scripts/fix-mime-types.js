#!/usr/bin/env node

/**
 * Script to fix MIME type issues for GitHub Pages deployment
 * This script adds proper file extensions and creates redirects
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');

console.log('🔧 Fixing MIME types for GitHub Pages...');

// Create .nojekyll file in dist directory
const nojekyllPath = path.join(distDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✅ Created .nojekyll file');
}

// Read and update index.html to ensure proper module loading
const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexPath)) {
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Ensure script tags have proper type="module"
  indexContent = indexContent.replace(
    /<script\s+src="([^"]+\.js)"[^>]*>/g,
    '<script type="module" src="$1"></script>'
  );
  
  // Add explicit MIME type meta tag
  if (!indexContent.includes('http-equiv="Content-Type"')) {
    indexContent = indexContent.replace(
      '<head>',
      '<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">'
    );
  }
  
  fs.writeFileSync(indexPath, indexContent);
  console.log('✅ Updated index.html with proper module loading');
}

// Create a simple web.config for IIS servers (if needed)
const webConfigPath = path.join(distDir, 'web.config');
const webConfigContent = `<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <staticContent>
      <mimeMap fileExtension=".js" mimeType="application/javascript" />
      <mimeMap fileExtension=".mjs" mimeType="application/javascript" />
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".css" mimeType="text/css" />
      <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
    </staticContent>
    <rewrite>
      <rules>
        <rule name="React Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>`;

fs.writeFileSync(webConfigPath, webConfigContent);
console.log('✅ Created web.config for IIS compatibility');

console.log('🎉 MIME type fixes completed!'); 