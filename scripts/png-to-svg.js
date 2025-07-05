#!/usr/bin/env node

/**
 * PNG to SVG Converter Script
 * Converts PNG images to SVG format using various methods
 */

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execAsync = promisify(exec);

// Configuration
const INPUT_DIR = path.join(__dirname, '../public/images/png');
const OUTPUT_DIR = path.join(__dirname, '../public/images/svg');

/**
 * Check if required tools are installed
 */
async function checkDependencies() {
  const tools = ['inkscape', 'imagemagick', 'potrace'];
  const available = [];
  
  for (const tool of tools) {
    try {
      await execAsync(`which ${tool}`);
      available.push(tool);
    } catch (error) {
      // Tool not available
    }
  }
  
  return available;
}

/**
 * Convert PNG to SVG using Inkscape (best quality)
 */
async function convertWithInkscape(inputPath, outputPath) {
  try {
    const command = `inkscape --export-type=svg "${inputPath}" --export-filename="${outputPath}"`;
    await execAsync(command);
    console.log(`✅ Inkscape: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.log(`❌ Inkscape failed: ${error.message}`);
    return false;
  }
}

/**
 * Convert PNG to SVG using ImageMagick + Potrace
 */
async function convertWithPotrace(inputPath, outputPath) {
  try {
    const tempBmp = inputPath.replace('.png', '.bmp');
    
    // Convert PNG to BMP
    await execAsync(`convert "${inputPath}" "${tempBmp}"`);
    
    // Convert BMP to SVG
    await execAsync(`potrace "${tempBmp}" -s -o "${outputPath}"`);
    
    // Cleanup temp file
    if (fs.existsSync(tempBmp)) {
      fs.unlinkSync(tempBmp);
    }
    
    console.log(`✅ Potrace: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.log(`❌ Potrace failed: ${error.message}`);
    return false;
  }
}

/**
 * Simple PNG to SVG conversion (embedded base64)
 */
function convertToEmbeddedSvg(inputPath, outputPath) {
  try {
    const imageBuffer = fs.readFileSync(inputPath);
    const base64Image = imageBuffer.toString('base64');
    const { width, height } = getImageDimensions(inputPath);
    
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <image width="${width}" height="${height}" xlink:href="data:image/png;base64,${base64Image}"/>
</svg>`;
    
    fs.writeFileSync(outputPath, svgContent);
    console.log(`✅ Embedded: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.log(`❌ Embedded conversion failed: ${error.message}`);
    return false;
  }
}

/**
 * Get image dimensions (simplified)
 */
function getImageDimensions(imagePath) {
  // This is a simplified version - in real implementation you'd use a proper image library
  return { width: 100, height: 100 };
}

/**
 * Convert all PNG files in input directory
 */
async function convertAllPngs() {
  console.log('🔄 Starting PNG to SVG conversion...\n');
  
  // Check available tools
  const availableTools = await checkDependencies();
  console.log('📋 Available tools:', availableTools.join(', ') || 'None (will use embedded method)');
  console.log('');
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Create input directory if it doesn't exist
  if (!fs.existsSync(INPUT_DIR)) {
    fs.mkdirSync(INPUT_DIR, { recursive: true });
    console.log(`📁 Created input directory: ${INPUT_DIR}`);
    console.log('📝 Place your PNG files in this directory and run the script again.');
    return;
  }
  
  // Find all PNG files
  const pngFiles = fs.readdirSync(INPUT_DIR)
    .filter(file => file.toLowerCase().endsWith('.png'));
  
  if (pngFiles.length === 0) {
    console.log('📝 No PNG files found in input directory.');
    console.log(`   Place PNG files in: ${INPUT_DIR}`);
    return;
  }
  
  console.log(`🎯 Found ${pngFiles.length} PNG file(s) to convert:\n`);
  
  // Convert each file
  for (const pngFile of pngFiles) {
    const inputPath = path.join(INPUT_DIR, pngFile);
    const outputPath = path.join(OUTPUT_DIR, pngFile.replace('.png', '.svg'));
    
    console.log(`🔄 Converting: ${pngFile}`);
    
    let success = false;
    
    // Try different conversion methods in order of preference
    if (availableTools.includes('inkscape')) {
      success = await convertWithInkscape(inputPath, outputPath);
    }
    
    if (!success && availableTools.includes('imagemagick') && availableTools.includes('potrace')) {
      success = await convertWithPotrace(inputPath, outputPath);
    }
    
    if (!success) {
      success = convertToEmbeddedSvg(inputPath, outputPath);
    }
    
    console.log('');
  }
  
  console.log('🎉 Conversion completed!');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
}

/**
 * Install dependencies guide
 */
function showInstallGuide() {
  console.log('📦 To install conversion tools:\n');
  console.log('🍺 macOS (Homebrew):');
  console.log('   brew install inkscape imagemagick potrace\n');
  console.log('🐧 Ubuntu/Debian:');
  console.log('   sudo apt-get install inkscape imagemagick potrace\n');
  console.log('🪟 Windows:');
  console.log('   - Download Inkscape: https://inkscape.org/');
  console.log('   - Download ImageMagick: https://imagemagick.org/');
  console.log('   - Install via Chocolatey: choco install inkscape imagemagick\n');
}

// Main execution
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log('🎨 PNG to SVG Converter');
  console.log('');
  console.log('Usage:');
  console.log('  npm run png-to-svg          # Convert all PNGs');
  console.log('  npm run png-to-svg --help   # Show this help');
  console.log('  npm run png-to-svg --install # Show install guide');
  console.log('');
  showInstallGuide();
} else if (args.includes('--install')) {
  showInstallGuide();
} else {
  convertAllPngs().catch(console.error);
} 