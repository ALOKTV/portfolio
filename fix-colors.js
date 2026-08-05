const fs = require('fs');
const path = require('path');

const replacements = {
  'text-foreground': 'text-slate-900 dark:text-slate-50',
  'text-muted': 'text-slate-600 dark:text-slate-400',
  'bg-background': 'bg-slate-50 dark:bg-[#0b1120]',
  'border-border': 'border-slate-200 dark:border-slate-800',
  'bg-surface': 'bg-white dark:bg-slate-900',
  'text-accent': 'text-indigo-600 dark:text-indigo-400',
  'bg-accent': 'bg-indigo-600 dark:bg-indigo-500'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  for (const [key, value] of Object.entries(replacements)) {
    // Replace whole word matches of the class
    const regex = new RegExp(`\\b${key}\\b`, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, value);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
