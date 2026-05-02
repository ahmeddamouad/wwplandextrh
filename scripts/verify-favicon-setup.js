#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const checks = [
  {
    name: 'favicon.ico exists',
    check: () => fs.existsSync('public/favicon.ico'),
  },
  {
    name: 'favicon.ico is not empty',
    check: () => {
      try {
        const stats = fs.statSync('public/favicon.ico');
        return stats.size > 0;
      } catch {
        return false;
      }
    },
  },
  {
    name: 'index.html contains favicon link',
    check: () => {
      const html = fs.readFileSync('index.html', 'utf-8');
      return html.includes('rel="icon"') && html.includes('/favicon.ico');
    },
  },
  {
    name: 'index.html contains apple-touch-icon link',
    check: () => {
      const html = fs.readFileSync('index.html', 'utf-8');
      return html.includes('rel="apple-touch-icon"');
    },
  },
  {
    name: 'index.html contains theme-color meta',
    check: () => {
      const html = fs.readFileSync('index.html', 'utf-8');
      return html.includes('name="theme-color"');
    },
  },
  {
    name: 'vite.config.ts exists and configured',
    check: () => {
      try {
        const config = fs.readFileSync('vite.config.ts', 'utf-8');
        return config.includes('publicDir') || config.includes('public');
      } catch {
        return false;
      }
    },
  },
  {
    name: 'Build dist directory exists',
    check: () => fs.existsSync('dist'),
  },
  {
    name: 'Favicon in dist directory',
    check: () => fs.existsSync('dist/favicon.ico'),
  },
];

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log('  📁 Favicon Setup Verification Script\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

let passed = 0;
let failed = 0;

checks.forEach((check, index) => {
  const result = check.check();
  const symbol = result ? '✓' : '✗';
  const status = result ? 'PASS' : 'FAIL';
  console.log(`  ${index + 1}. ${symbol} ${check.name}`);
  console.log(`     Status: [${status}]\n`);
  
  if (result) passed++;
  else failed++;
});

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log(`  📊 Results: ${passed} passed, ${failed} failed\n`);

if (failed > 0) {
  console.log('  ⚠️  Issues found! Review the failing checks above.\n');
  console.log('  Quick fixes:\n');
  console.log('  1. Ensure public/favicon.ico exists:\n');
  console.log('     ls -la public/favicon.ico\n');
  console.log('  2. Verify vite.config.ts has publicDir set\n');
  console.log('  3. Rebuild project:\n');
  console.log('     npm run build\n');
  console.log('  4. For detailed help, read FAVICON_TROUBLESHOOTING_GUIDE.md\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  process.exit(1);
} else {
  console.log('  ✅ All checks passed! Favicon setup is correct.\n');
  console.log('  Next steps:\n');
  console.log('  1. Test locally:\n');
  console.log('     npm run build && npm run preview\n');
  console.log('  2. Check favicon loads at http://localhost:4173/favicon.ico\n');
  console.log('  3. Run tests: bash scripts/test-favicon.sh http://localhost:4173\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  process.exit(0);
}
