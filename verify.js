// Simple verification script to check if all files are in place
// Run with: node verify.js

const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'package.json',
  'vite.config.ts',
  'tailwind.config.js',
  'postcss.config.js',
  'tsconfig.json',
  'tsconfig.node.json',
  'index.html',
  '.gitignore',
  'README.md',
  'DEPLOYMENT.md',
  'QUICKSTART.md',
  'PROJECT_SUMMARY.md',
  'src/main.tsx',
  'src/App.tsx',
  'src/index.css',
  'src/components/TopBar.tsx',
  'src/components/Sidebar.tsx',
  'src/components/Footer.tsx',
  'src/components/Overview.tsx',
  'src/components/StatementGenerator.tsx',
  'src/components/ConcernDashboard.tsx',
  'src/components/Committees.tsx',
  'src/components/About.tsx',
  'src/components/Support.tsx',
  'src/lib/random.ts',
  'src/lib/data.ts',
  'src/lib/generator.ts',
  'public/radar.svg',
];

console.log('🔍 Verifying project structure...\n');

let allPresent = true;
let missingFiles = [];

requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  if (exists) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allPresent = false;
    missingFiles.push(file);
  }
});

console.log('\n' + '='.repeat(50) + '\n');

if (allPresent) {
  console.log('✅ All files present!');
  console.log('\nNext steps:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm run dev');
  console.log('3. Open: http://localhost:5173');
  console.log('4. Build: npm run build');
  console.log('5. Deploy using DEPLOYMENT.md guide\n');
} else {
  console.log('❌ Some files are missing:');
  missingFiles.forEach(file => console.log(`   - ${file}`));
  console.log('\nPlease ensure all files are created before proceeding.\n');
  process.exit(1);
}

// Check if node_modules exists
if (fs.existsSync(path.join(__dirname, 'node_modules'))) {
  console.log('📦 node_modules found - dependencies installed');
} else {
  console.log('⚠️  node_modules not found - run "npm install" first');
}

// Check package.json scripts
try {
  const pkg = require('./package.json');
  console.log('\n📋 Available scripts:');
  Object.keys(pkg.scripts).forEach(script => {
    console.log(`   npm run ${script}`);
  });
} catch (e) {
  console.log('⚠️  Could not read package.json');
}

console.log('\n✨ Project: MONITORING THE SITUATION');
console.log('🎯 Status: Ready for development\n');
