const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);

function filterByExtensions(files, extensions) {
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return extensions.includes(ext);
  });
}

async function copyFiles(sourceDir, targetDir, extensions) {
  try {
    const files = await readdir(sourceDir);
    const filteredFiles = filterByExtensions(files, extensions);

    // Check if the target directory exists, if not, create it recursively
    if (!fs.existsSync(targetDir)) {
      await mkdir(targetDir, { recursive: true });
      console.log(`Target directory created: ${targetDir}`);
    }

    for (const file of filteredFiles) {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      if (!fs.existsSync(sourcePath)) {
        console.error(`Source file not found: ${sourcePath}`);
        continue;
      }

      try {
        await copyFile(sourcePath, targetPath);
        console.log(`Copied: ${file}`);
      } catch (copyError) {
        console.error(`Error copying ${file}:`, copyError.message);
      }
    }

    console.log('Copy process completed.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const [, , sourceDir, targetDir, ...extensions] = process.argv;

if (!sourceDir || !targetDir) {
  console.error('Usage: node copyFiles.js <sourceDir> <targetDir> [extensions]');
  process.exit(1);
}

const defaultExtensions = ['.txt', '.jpg'];
const filterExtensions = extensions.length > 0 ? extensions : defaultExtensions;

copyFiles(sourceDir, targetDir, filterExtensions);
