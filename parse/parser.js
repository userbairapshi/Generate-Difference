import { absolutePath1, absolutePath2 } from './path.js';
import fs from 'fs';

const fileContent1 = fs.readFileSync(absolutePath1, 'utf-8');
const fileContent2 = fs.readFileSync(absolutePath2, 'utf-8');
  
export const data1 = JSON.parse(fileContent1);
export const data2 = JSON.parse(fileContent2);

