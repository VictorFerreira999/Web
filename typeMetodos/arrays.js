

var carrosArray = ['Fiat', 'VW', 'Gm', 'Ferrari']

console.log('Original Array: ', carrosArray);

// Pop e Push

carrosArray.pop()

console.log('Pop: ', carrosArray);

carrosArray.push('Renault');

console.log('Push: ', carrosArray);

// Shift e Unshift

carrosArray.shift();

console.log('Shift: ', carrosArray);

carrosArray.unshift('JacMotors');

console.log('UnShift: ', carrosArray);

// Splice e Slice

carrosArray.splice(1, 2);

console.log('Splice 2 elemento: ', carrosArray);

const novoArray = carrosArray.slice(1)

console.log('Slice elemento: ', novoArray);
