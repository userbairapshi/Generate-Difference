import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

const parse = (filePath) => {
  const ext = path.extname(filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  
  switch (ext) {
      case '.yaml':
      case '.yml':
          return yaml.parse(content);
      case '.json':
          return JSON.parse(content);
      default:
          throw new Error(`Unsupported file format: ${ext}`);
  }
};

export { parse };
  