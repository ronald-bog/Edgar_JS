//? REDUCE
// sintaxis: array.reduce(CB(acumulador, valorActual, index, array), initValue)

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acc, v) => acc + v, 0);
const suma1 = numeros.reduce((acc, v) => acc + v, 1000);

console.log(suma);
console.log(suma1);

const marcasDD = ['SanDisk', 'Maxtor', 'Hitachi', 'Seagate', 'Samsung'];
const resultado = marcasDD.reduce((ac, elem) => `${ac} ${elem}`);
const resultado2 = marcasDD.reduce((ac, elem, index) => `${ac} El disco # ${index + 1} es: ${elem}\n`, '');

console.log(resultado2);

const letras = 'aabbbccddeeff';
const letrasUnicas = letras.split('');
const unicas = letrasUnicas.reduce((acc, letra) => acc.includes(letra) ? acc : acc + letra, '');

console.log(unicas);

// FIND

const edades = [90, 55, 9, 15, 30, 45];

const resultadoEdad = edades.find(ele => ele === 15);
console.log(resultadoEdad);


