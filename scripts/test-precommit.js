#!/usr/bin/env node

/**
 * Test Pre-commit CV Generation
 * Simulates the pre-commit hook behavior for testing
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🧪 Testing Pre-commit CV Generation...\n');

try {
  // Set environment to force production
  process.env.FORCE_PRODUCTION = 'true';
  
  console.log('🌐 Checking production site availability...');
  
  // Test production site availability
  try {
    const response = await fetch('https://vule.dev');
    if (!response.ok) {
      throw new Error(`Production site returned ${response.status}`);
    }
    console.log('✅ Production site is available\n');
  } catch (error) {
    console.log('❌ Production site not available:', error.message);
    console.log('⚠️  Pre-commit would fail in this case\n');
    process.exit(1);
  }
  
  console.log('🎨 Generating CV PDF from production...');
  
  // Run CV generation
  execSync('npm run generate-cv-prod', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  
  // Check if PDF was generated
  const pdfPath = path.join(__dirname, '../public/Vu_Le_Resume.pdf');
  
  if (fs.existsSync(pdfPath)) {
    const stats = fs.statSync(pdfPath);
    const fileSizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log('\n✅ Pre-commit test successful!');
    console.log(`📁 PDF generated: ${pdfPath}`);
    console.log(`📊 File size: ${fileSizeMB} MB`);
    console.log(`🕒 Last modified: ${stats.mtime.toLocaleString()}`);
    
    // Simulate git add
    console.log('\n📝 In real pre-commit, this file would be added to git:');
    console.log('   git add public/Vu_Le_Resume.pdf');
    
  } else {
    console.log('\n❌ Pre-commit test failed!');
    console.log('📁 PDF was not generated');
    process.exit(1);
  }
  
} catch (error) {
  console.error('\n💥 Pre-commit test failed:', error.message);
  process.exit(1);
}

console.log('\n🎉 Pre-commit simulation completed successfully!');
console.log('\n📋 Next steps:');
console.log('   1. Make some changes to your files');
console.log('   2. Run: git add .');
console.log('   3. Run: git commit -m "your message"');
console.log('   4. The pre-commit hook will automatically update the CV PDF'); 