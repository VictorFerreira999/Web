/* Criação de uma classe básica:
Crie uma classe chamada Pessoa com propriedades como nome, idade e métodos como getNome() e getIdade().*/

class Pessoa {
   constructor(nome, idade) {
     this._nome = nome;
     this._idade = idade;
   }
 
   get nome() {
     return this._nome;
   }
 
   get idade() {
     return this._idade;
   }
 }

 const pessoa1 = new Pessoa('Victor', 25);
 console.log(pessoa1.nome);
 console.log(pessoa1.idade); 

 class Aluno extends Pessoa {
   constructor(nome, idade, matricula) {
     super(nome, idade);
     this._matricula = matricula;
   }
 
   get matricula() {
     return this._matricula;
   }
 }
 
 
 const aluno1 = new Aluno('Ana', 20, '12345');
 console.log(aluno1.nome);      
 console.log(aluno1.idade);     
 
 