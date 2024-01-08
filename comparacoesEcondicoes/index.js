// Exemplo de condicionais e comparativos em JavaScript

// Variáveis para fins de exemplo
let numero1 = 10;
let numero2 = 5;

// Condicional "if"
if (numero1 > numero2) {
    console.log("numero1 é maior que numero2");
} else if (numero1 < numero2) {
    console.log("numero1 é menor que numero2");
} else {
    console.log("numero1 é igual a numero2");
}

// Condicional switch
let diaDaSemana = "Segunda";

switch (diaDaSemana) {
    case "Segunda":
        console.log("É o início da semana");
        break;
    case "Quarta":
        console.log("Metade da semana");
        break;
    case "Sexta":
        console.log("Quase no final da semana");
        break;
    default:
        console.log("Outro dia da semana");
}

// Operador ternário
let resultado = (numero1 > numero2) ? "Maior" : "Menor ou igual";
console.log("O resultado é:", resultado);
