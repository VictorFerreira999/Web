//Métodos de String

var text = 'Hellow world  ';

// 1 - Lenght

console.log(' Lenght (tamanho): ', text.length);

// 2 - indexOf

console.log(' Indice do: ', text.indexOf('world'));

// 3 - Search 

console.log(' Search: ', text.search('world'));

// 4 - Slice e Substring

console.log(' Slice: ', text.slice(0, 4));

// 5 - Replace
 
console.log(' Replace: ', text.replace('Hellow', 'Olá'));

// 6 - UpperCase e LowerCase

console.log(' LowerCase: ', text.toLowerCase());
console.log(' UpperCase: ', text.toUpperCase());

// 7 - Trim

console.log(' Trim: ', text.trim());

// 8 - CharAt

console.log('CharAt: ', text.charAt(1))