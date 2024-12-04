function saudacao(nome: string): string {
    return "Olá " + nome;
}

const mensagem = saudacao("Luana");
console.log(mensagem);



function multiplicacao(a: number, b: number): number {
    return a * b;
}

const multiplicar = multiplicacao(7,9);
console.log(multiplicar)