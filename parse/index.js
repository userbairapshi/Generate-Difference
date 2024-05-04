
import fs from 'fs';
import path from 'path';

const filePath1 = 'src/filePath1.json';
const filePath2 = 'src/filePath2.json';

const absolutePath1 = path.resolve(process.cwd(), filePath1);
const absolutePath2 = path.resolve(process.cwd(), filePath2);

const fileContent1 = fs.readFileSync(absolutePath1, 'utf-8');
const fileContent2 = fs.readFileSync(absolutePath2, 'utf-8');

const data1 = JSON.parse(fileContent1);
const data2 = JSON.parse(fileContent2);

console.log(data1, data2);