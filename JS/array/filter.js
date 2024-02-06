const produtos = [
   { nome: "Notebook", preco: 2499, fragil: true},
   { nome: "iPad Pro", preco: 4199, fragil: true},
   { nome: "Copo de vidro", preco: 12.49, fragil: true},
   { nome: "Copo de plástico", preco: 18.99, fragil: false}
]

//fragil e maior que 500

 const maiorQuinhetos = (e) => e.preco > 500.00
 const fragil = (e) => e.fragil === true

 resultado = produtos.filter(maiorQuinhetos).filter(fragil)
 console.log(resultado)