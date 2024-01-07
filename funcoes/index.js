   function calcularImc(peso, altura){
      return (peso / (altura * altura))
   };

   var pessoa1 = {
      peso: 90,
      altura:2,
   }

   var pessoa2 = {
      peso: 50,
      altura:1.5,
   }

   var imcPessoa1 = calcularImc(pessoa1.peso, pessoa1.altura)
   var imcPessoa2 = calcularImc(pessoa2.peso, pessoa2.altura)

   console.log('IMC DA PESSOA 1 =', imcPessoa1)
   console.log('IMC DA PESSOA 2 =', imcPessoa2)

   // ARROW FUNCTION

   calcularMedia = (n1, n2) => {
      var media = (n1 + n2) / 2
      return media
   }

   var x =12;
   var y = 30;
   var resultado =  calcularMedia(x,y);

   console.log(`Media do numeros: ${x} e ${y} = ${resultado}`)
