#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const targetDir = 'my-dashboard';
const templateDir = path.join(__dirname, 'template');

try {
  console.log('📦 Scaffolding your dashboard...');

  if (fs.existsSync(targetDir)) {
    console.error(`❌ Folder "${targetDir}" already exists.`);
    process.exit(1);
  }

  fs.cpSync(templateDir, targetDir, { recursive: true });

  console.log('\n✅ Dashboard created in:', targetDir);
  console.log('👉 Next steps:');
  console.log(`   cd ${targetDir}`);
  console.log('   npm install');
  console.log('   npm run dev');
} catch (err) {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
}
