import path from 'path';

const filePath1 = 'src/filePath1.json';
const filePath2 = 'src/filePath2.json';

export const absolutePath1 = path.resolve(process.cwd(), filePath1);
export const absolutePath2 = path.resolve(process.cwd(), filePath2);


 