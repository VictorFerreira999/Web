class Avo {
   constructor(sobrenome) {
      this.sobrenome = sobrenome
   }
}

class Pai extends Avo {
   constructor(sobrenome, profissao = 'Professor') {
      super(sobrenome)
      this.profissao = profissao
   }
}

class Filho extends Avo {
   constructor(sobrenome, profissao = 'Estudante') {
      super('Silva')
      this.profissao = profissao
   }
}

const filho = new Filho
console.log(filho)