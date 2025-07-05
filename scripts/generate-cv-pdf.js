#!/usr/bin/env node

/**
 * CV PDF Generator Script
 * Generates a professional CV PDF from the live portfolio website
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  // Local development URL
  LOCAL_URL: 'http://localhost:3000',
  // Production URL
  PRODUCTION_URL: 'https://vule.dev',
  // Output directory
  OUTPUT_DIR: path.join(__dirname, '../public'),
  // PDF filename
  PDF_FILENAME: 'Vu_Le_Resume.pdf',
  // Wait time for animations to complete
  ANIMATION_WAIT: 3000,
  // Viewport settings
  VIEWPORT: {
    width: 1200,
    height: 800,
    deviceScaleFactor: 2
  }
};

/**
 * Check if local dev server is running
 */
async function isLocalServerRunning() {
  try {
    const response = await fetch(CONFIG.LOCAL_URL);
    return response.ok;
  } catch (error) {
    return false;
  }
}

/**
 * Check if production site is available
 */
async function isProductionSiteAvailable() {
  try {
    const response = await fetch(CONFIG.PRODUCTION_URL);
    return response.ok;
  } catch (error) {
    return false;
  }
}

/**
 * Generate CV PDF from website
 */
async function generateCVPDF() {
  console.log('🚀 Starting CV PDF generation...\n');

  // Check which URL to use - prioritize production for pre-commit
  const isProductionAvailable = await isProductionSiteAvailable();
  const isLocalRunning = await isLocalServerRunning();
  
  let targetUrl;
  let serverType;
  
  if (process.env.FORCE_PRODUCTION || process.argv.includes('--production')) {
    // Force production mode (for pre-commit)
    if (isProductionAvailable) {
      targetUrl = CONFIG.PRODUCTION_URL;
      serverType = 'production (forced)';
    } else {
      throw new Error('Production site not available but forced production mode requested');
    }
  } else if (isProductionAvailable) {
    // Prefer production if available
    targetUrl = CONFIG.PRODUCTION_URL;
    serverType = 'production';
  } else if (isLocalRunning) {
    // Fallback to local
    targetUrl = CONFIG.LOCAL_URL;
    serverType = 'local development';
  } else {
    throw new Error('Neither production nor local development server is available');
  }
  
  console.log(`📍 Target URL: ${targetUrl}`);
  console.log(`🎯 Using ${serverType} server\n`);

  let browser;
  try {
    // Launch browser
    console.log('🌐 Launching browser...');
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport(CONFIG.VIEWPORT);
    
    // Add custom CSS for PDF optimization
    await page.addStyleTag({
      content: `
        /* PDF-specific styles */
        @media print {
          body {
            background: #000 !important;
            color: #fff !important;
          }
          
          /* Hide navigation and interactive elements */
          nav,
          header,
          .no-print,
          [data-no-print],
          button:not(.print-keep),
          .scroll-indicator,
          .loading-spinner {
            display: none !important;
          }
          
          /* Optimize layout for PDF */
          .container-max-width {
            max-width: none !important;
            padding: 0 40px !important;
          }
          
          section {
            page-break-inside: avoid;
            margin-bottom: 40px !important;
            padding: 20px 0 !important;
          }
          
          /* Ensure text is readable */
          h1, h2, h3, h4, h5, h6 {
            color: #fff !important;
            page-break-after: avoid;
          }
          
          p, span, div, li {
            color: #e5e5e5 !important;
          }
          
          /* Fix grid layouts */
          .grid {
            display: block !important;
          }
          
          .grid > * {
            margin-bottom: 20px !important;
            break-inside: avoid;
          }
          
          /* Skill bars and progress indicators */
          .skill-bar,
          .progress-bar {
            background: #333 !important;
          }
          
          /* Contact form - hide completely */
          #contact form,
          #contact .no-print {
            display: none !important;
          }
          
          /* Ensure proper spacing */
          #home { padding-top: 0 !important; }
          
          /* Footer adjustments */
          footer {
            margin-top: 40px !important;
            padding: 20px 0 !important;
          }
        }
        
        /* Always hide these elements */
        .no-print,
        [data-no-print] {
          display: none !important;
        }
      `
    });

    // Navigate to the page
    console.log(`📄 Loading page: ${targetUrl}`);
    await page.goto(targetUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for any animations to complete
    console.log(`⏳ Waiting ${CONFIG.ANIMATION_WAIT}ms for animations...`);
    await new Promise(resolve => setTimeout(resolve, CONFIG.ANIMATION_WAIT));

    // Scroll through the page to trigger any lazy loading
    console.log('📜 Scrolling through page to trigger lazy loading...');
    await autoScroll(page);

    // Wait a bit more after scrolling
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate PDF
    console.log('🎨 Generating PDF...');
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        bottom: '20mm',
        left: '15mm',
        right: '15mm'
      },
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      scale: 1
    });

    // Save PDF
    const outputPath = path.join(CONFIG.OUTPUT_DIR, CONFIG.PDF_FILENAME);
    fs.writeFileSync(outputPath, pdfBuffer);

    console.log('✅ PDF generated successfully!');
    console.log(`📁 Saved to: ${outputPath}`);
    console.log(`📊 File size: ${(pdfBuffer.length / 1024 / 1024).toFixed(2)} MB\n`);

    // Add PDF metadata
    await addPDFMetadata(outputPath);

  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

/**
 * Auto scroll through the page
 */
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          // Scroll back to top
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
}

/**
 * Add metadata to PDF (placeholder - would need additional library)
 */
async function addPDFMetadata(pdfPath) {
  console.log('📝 PDF metadata would be added here');
  // Note: To add actual metadata, you'd need a library like pdf-lib
  // For now, we'll just log the action
}

/**
 * Generate multiple PDF versions
 */
async function generateMultipleVersions() {
  console.log('📋 Generating multiple PDF versions...\n');

  // Standard resume
  CONFIG.PDF_FILENAME = 'Vu_Le_Resume.pdf';
  await generateCVPDF();

  // Dated version
  const date = new Date().toISOString().split('T')[0];
  CONFIG.PDF_FILENAME = `Vu_Le_Resume_${date}.pdf`;
  await generateCVPDF();

  console.log('🎉 All PDF versions generated successfully!');
}

/**
 * Cleanup old PDF files
 */
function cleanupOldPDFs() {
  const files = fs.readdirSync(CONFIG.OUTPUT_DIR);
  const pdfFiles = files.filter(file => 
    file.startsWith('Vu_Le_Resume_') && 
    file.endsWith('.pdf') &&
    file !== 'Vu_Le_Resume.pdf'
  );

  // Keep only the 3 most recent dated PDFs
  if (pdfFiles.length > 3) {
    const sortedFiles = pdfFiles.sort().reverse();
    const filesToDelete = sortedFiles.slice(3);
    
    filesToDelete.forEach(file => {
      const filePath = path.join(CONFIG.OUTPUT_DIR, file);
      fs.unlinkSync(filePath);
      console.log(`🗑️  Deleted old PDF: ${file}`);
    });
  }
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);

  try {
    if (args.includes('--help') || args.includes('-h')) {
      console.log('🎨 CV PDF Generator');
      console.log('');
      console.log('Usage:');
      console.log('  npm run generate-cv          # Generate single PDF');
      console.log('  npm run generate-cv --multi  # Generate multiple versions');
      console.log('  npm run generate-cv --clean  # Cleanup old PDFs');
      console.log('  npm run generate-cv --help   # Show this help');
      console.log('');
      console.log('Output: public/Vu_Le_Resume.pdf');
      return;
    }

    if (args.includes('--clean')) {
      cleanupOldPDFs();
      return;
    }

    if (args.includes('--multi')) {
      await generateMultipleVersions();
    } else {
      await generateCVPDF();
    }

    console.log('✨ CV PDF generation completed!');
    console.log(`🌐 PDF will be available at: ${CONFIG.PRODUCTION_URL}/${CONFIG.PDF_FILENAME}`);

  } catch (error) {
    console.error('💥 Generation failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
} 