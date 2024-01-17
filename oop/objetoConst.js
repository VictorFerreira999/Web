// pessoa -> 123 - {...}

const pessoa = {nome: 'João'}
pessoa.nome =  'Pedro'
console.log (pessoa)

Object.freeze(pessoa) //congela o objeto
pessoa.nome = 'Maria'
console.log(pessoa.nome)
