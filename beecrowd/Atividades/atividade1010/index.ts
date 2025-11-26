import * as fs from "fs";


// 1. Leitura da entrada padrão
const input: string = fs.readFileSync(0, "utf8").trim();

// 2. Separação das linhas
const linhas: string[] = input.split("\n");

//linhas = ['12 1 5.30', '16 2 5.10']
const produto1: string[] = linhas[0].split(" ");
console.log(produto1);

const produto2: string[] = linhas[1].split(" ");
console.log(produto2);

const cd1: number = parseInt(produto1[0]); 
const nm1: number = parseInt(produto1[1]);
const vl1: number = parseFloat(produto1[2]);

const cd2: number = parseInt(produto2[0]); 
const nm2: number = parseInt(produto2[1]);
const vl2: number = parseFloat(produto2[2]);

const total: number = (nm1 * vl1) + (nm2 * vl2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
