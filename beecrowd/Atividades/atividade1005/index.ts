
import * as fs from 'fs';

// 1. Leitura da entrada padrão
const input: string = fs.readFileSync(0, 'utf8').trim();

// 2. Separação das linhas
const linhas: string[] = input.split('\n');

const A: number = parseFloat(linhas[0]);
const B: number = parseFloat(linhas[1]);

const media: number = ((A * 3.5) + (B * 7.5)) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);
