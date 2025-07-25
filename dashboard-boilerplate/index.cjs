#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Optional: customize the output folder
const targetDir = 'my-dashboard';

try {
  console.log('📦 Scaffolding your dashboard...');

  // Check if directory exists already
  if (fs.existsSync(targetDir)) {
    console.error(`❌ Folder "${targetDir}" already exists. Please remove it or use a different name.`);
    process.exit(1);
  }

  // Clone the boilerplate
  execSync(
    `git clone https://github.com/ivie-gif/dashboard-boilerplate.git ${targetDir}`,
    { stdio: 'inherit' }
  );

  console.log('\n✅ Dashboard created in:', targetDir);
  console.log('👉 Next steps:');
  console.log(`   cd ${targetDir}`);
  console.log('   npm install');
  console.log('   npm run dev');
} catch (err) {
  console.error('\n❌ Something went wrong:', err.message);
  process.exit(1);
}
