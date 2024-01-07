const timesArray = [
   'Barcelona',
   'Real Madrid',
   'Bayern',
   'Borussia',
   'Chelsea',
   'Manchester',
];

const numbersArray = [
   1, 345, 12, 2312, 123, 34, 85, 912
]

console.log('Array original: ', timesArray);


// 1 - Sort e Reverse

console.log('Sort: ', timesArray.sort());
console.log('Recerse: ', timesArray.reverse());

console.log('Short Number: ', numbersArray.sort((a, b) => b - a));

//  2 - ForEach 

timesArray.forEach((time, index) => {
   console.log(`O a posição do time ${time} é ${index}`)
});

// 3 - Map

const numbersFormatado = numbersArray.map((n) => n / 10)
console.log('Map: ', numbersFormatado);

// 4 - Filter

const filtrados = timesArray.filter((time) => time.charAt(0) === 'B');
console.log('Times filtrados: ', filtrados);

// 5 - Reduce

const somaDoAraay = numbersArray.reduce((ac, n) => ac += n);
console.log('Soma do Array Reduce: ', somaDoAraay);

// 6 - Find
 const itemAchado = timesArray.find((t) => t === 'Barcelona');
 console.log('Find: ', itemAchado);