    import * as fs from 'fs';

    // 1. Leitura da entrada padrão
    const input: string = fs.readFileSync(0, 'utf8').trim();

    // 2. Separação das linhas
    const linhas: string[] = input.split('\n');

    const Nomefuncionario: number = parseInt(linhas[0]);
    const Salario: number = parseFloat(linhas[1]);
    const TotalVendas: number = parseFloat(linhas[2]);

    const Comissao: number = (15/100) * TotalVendas;
    const SalarioT: number = Comissao + Salario

    console.log(`TOTAL = R$ ${SalarioT.toFixed(2)}`)