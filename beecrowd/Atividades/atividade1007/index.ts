import * as fs from 'fs';

// 1. Leitura da entrada padrão
const input: string = fs.readFileSync(0, 'utf8').trim();

// 2. Separação das linhas
const linhas: string[] = input.split('\n');

const A: number = parseInt(linhas[0]);
const B: number = parseInt(linhas[1]);
const C: number = parseInt(linhas[2]);
const D: number = parseInt(linhas[3]);

const diferenca: number = A * B - C * D;

console.log(`DIFERENCA = ${diferenca}`)