// Declaração de variáveis
var nome, sobrenome;
var idade, peso;
var ficha; // variável tipo objeto
var listaDeNomes; // variável do tipo array
var listaDeCarros;

// Atribuição de valores às variáveis
nome = 'Victor';
sobrenome = 'Ferreira';
idade = 25;
peso = 80;

// Objeto 'ficha' contendo informações do usuário
ficha = {
   nome,
   sobrenome,
   idade,
   peso,
   corDoCabelo: 'Preto'
};

// Array 'listaDeNomes' com alguns nomes
listaDeNomes = [
   'Joao', 'Marcos', 'Pedro', 'Luiz'
];

// Array de objetos 'listaDeCarros' com informações de carros
listaDeCarros = [
   {
      placa: '0WW22',
      modelo: 'Renegade'
   },
   {
      placa: 'MFI54',
      modelo: 'FERRARI'  
   },
   {
      placa: 'UUU054',
      modelo: 'Civic'
   }
];

// Saída no console para verificar os valores
console.log('Nome do usuário: ', nome);
console.log('Sobrenome do usuário: ', sobrenome);
console.log('Idade do usuário: ', idade);
console.log('A ficha do usuário é: ');
console.log(ficha);
console.log('***********************');
console.log('Lista de nomes: ');
console.log(listaDeNomes);
console.log('***********************');
console.log('Lista de carros: ');
console.log(listaDeCarros);
