import * as fs from 'fs';

// 1. Leitura da entrada padrão
const input: string = fs.readFileSync(0, 'utf8').trim();

// 2. Separação das linhas
const linhas: string[] = input.split('\n');

const Nfuncionario: number = parseInt(linhas[0]);
const Nhoras: number = parseFloat(linhas[1]);
const Nvalor: number = parseFloat(linhas[2]);

const salario: number = Nhoras * Nvalor;
console.log(`NUMBER = ${Nfuncionario}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)
