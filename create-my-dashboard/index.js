#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('Scaffolding your dashboard...');
execSync('git clone https://github.com/ivie-gif/dashboard-boilerplate.git', { stdio: 'inherit' });
