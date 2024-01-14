// estrategia de gerar valor padrão

function soma1(a,b,c) {
   a = a || 1
   b = b || 1
   c = c || 1
   return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3))

// outra estrategia

function soma2(a,b,c) {
   a = a !== undefined ? a : 1
   b = 1 in arguments ? b : 1
   c = isNaN(c) ? 1 : c
}
