// Importa o módulo 'fs' (File System) para ler a entrada padrão no ambiente Node.js.
// Em plataformas de julgamento como o Beecrowd, a entrada é lida a partir de '/dev/stdin'.
import * as fs from 'fs';

/**
 * Problema 1002: Área do Círculo
 * A fórmula para calcular a área de uma circunferência é: area = π . raio².
 * Utilize π = 3.14159 e o resultado deve ser formatado com 4 casas decimais.
 */

// Define o valor de Pi conforme especificado no problema
const PI: number = 3.14159;

// --- Leitura da Entrada ---

// Lê todo o conteúdo da entrada padrão (stdin), decodifica como string e remove espaços/linhas em branco extras.

const input: string = fs.readFileSync(0, 'utf8').trim();

// A entrada contém apenas um valor de ponto flutuante, o raio.
const raio: number = parseFloat(input);

// Verifica se a leitura foi bem-sucedida e o valor é um número válido.
if (isNaN(raio)) {
  // Se a entrada não for um número, imprime um erro no console para diagnóstico (não necessário para a solução final, mas útil para debug).
  console.error('Erro: A entrada deve ser um número.');
} else {
  // --- Cálculo da Área ---

  // Efetua o cálculo da área: area = π * raio²
  const area: number = PI * Math.pow(raio, 2);

  // --- Formatação e Saída ---

  // Formata o valor da área para ter exatamente 4 casas decimais.
  // O método toFixed(4) retorna uma string.
  const resultadoFormatado: string = area.toFixed(4);

  // Apresenta o resultado no formato "A=" seguido pelo valor.
  console.log(`A=${resultadoFormatado}`);
}

