const alunos = [
   {nome: 'João', nota: 7.3, bolsista: false},
   {nome: 'Maria', nota: 9.2, bolsista: true},
   {nome: 'Pedro', nota: 9.8, bolsista: false},
   {nome: 'Ana', nota: 8.7, bolsista: true}
]


// verifica se todos os alunos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//verifica se alguns alunos são bolsitas 
const algumtBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumtBolsista))

