var nome,sobrenome;
var idade, peso;
var ficha; // variavel tipo objeto
var listaDeNomes; //variavel do tipo array
var listaDeCarros;

nome = 'Victor';
sobrenome = 'Ferreira';
idade = 25;
peso = 80;

ficha = {
   nome,
   sobrenome,
   idade,
   peso,
   corDoCabelo: 'Preto'

}

listaDeNomes = [
   'Joao', 'Marcos', 'Pedro', 'Luiz'
]

listaDeCarros = [
   {
      placa: '0WW22',
      modelo: 'Renegade'
   },{
      placa: 'MFI54',
      modelo: 'FERRARI'  
   },{
      placa: 'UUU054',
      modelo: 'Civic'
   }
]


console.log('Nome do usuario: ', nome);
console.log('Sobrenome do usuario: ', sobrenome);
console.log('Idade do usuario: ', idade);
console.log('A ficha do usuario é: ');
console.log(ficha);
console.log('***********************');
console.log(listaDeNomes);
console.log('***********************');
console.log('***********************');
console.log('Lista de carros')
console.log(listaDeCarros);




