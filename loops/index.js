// Exemplo de loops em JavaScript

// Loop for
console.log("Loop 'for':");
for (let i = 1; i <= 5; i++) {
    console.log("Iteração " + i);
}

// Loop while
console.log("\nLoop 'while':");
let j = 1;
while (j <= 5) {
    console.log("Iteração " + j);
    j++;
}

// Loop do-while
console.log("\nLoop 'do-while':");
let k = 1;
do {
    console.log("Iteração " + k);
    k++;
} while (k <= 5);

// Loop for-in (iterando sobre propriedades de um objeto)
console.log("\nLoop 'for-in':");
const pessoa = { nome: "João", idade: 25, cidade: "Exemplo" };
for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}

// Loop for-of (iterando sobre elementos de um array)
console.log("\nLoop 'for-of':");
const frutas = ["Maçã", "Banana", "Morango"];
for (let fruta of frutas) {
    console.log(fruta);
}
