const carrinho = [
   '{"nome": "Borracha", "preco": 3.45',
   '{"nome": "caderno", "preco": 13.90 }',
   '{"nome": "Kit de Lapis", "preco": 41.22 }',
   '{"nome": "Caneta", "preco": 7.50 }',
]

//Retorne um array apenas com preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)