const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas) {
   if (notas[i] < 7) {
      notasBaixas.push(notas[i])
   }
}

console.log(notasBaixas)

//Com callback
const notasBaixas2 = notas.filter(function (nota){
   return  nota < 7
})

console.log(notasBaixas2)

// Com Arrow function
const notasBaixas3 = notas.filter((nota) => nota < 7)
console.log(notasBaixas3)

// Com Arrow function e armazenando a função em outro lugar antes
const notasMenorQueSete = (nota) => nota < 7
const notasBaixas4 = notas.filter(notasMenorQueSete)
console.log(notasBaixas4)