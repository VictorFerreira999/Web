function area(largura,altura) {
   const area = largura * altura
   if (area > 20){
      console.log(`Valor acima do permitidido: ${area} m2`)
   } else {
      return area
   }
}

console.log(area(2,2))
console.log(area(4,4))
console.log(area(6,6))
