
import * as fs from 'fs';

const input: string = fs.readFileSync(0, 'utf8').trim();

const linhas: string[] = input.split('\n');
const notaA: number = parseFloat(linhas[0]);
const notaB: number = parseFloat(linhas[1]);

const soma: number = notaA + notaB;

console.log(`soma = ${soma}`);

console.log({input,linhas,notaA,notaB})