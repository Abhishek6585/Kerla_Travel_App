const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files in components/ui
function findTsxFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (entry.name.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix versioned imports in a file
function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove version specifiers from imports
    const versionPattern = /@[0-9]+\.[0-9]+\.[0-9]+/g;
    const newContent = content.replace(versionPattern, '');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const uiDir = path.join(__dirname, 'components', 'ui');
  
  if (!fs.existsSync(uiDir)) {
    console.error('UI components directory not found');
    return;
  }
  
  const tsxFiles = findTsxFiles(uiDir);
  let totalFixed = 0;
  
  console.log(`Found ${tsxFiles.length} .tsx files in components/ui`);
  
  for (const file of tsxFiles) {
    if (fixImportsInFile(file)) {
      totalFixed++;
    }
  }
  
  console.log(`Fixed imports in ${totalFixed} files`);
}

main();