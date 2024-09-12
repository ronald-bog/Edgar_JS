// map: es igual a forEach la unica diferencia es que si retorna un nuevo array

const cadena = 'Hola Mundo';

const caracteres = cadena.split('');

const letras = caracteres.map(elem => `Caracter: ${elem}`);

//console.log(letras);

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
//console.log(doubled);

const doble = numbers.map((x, i) => {
    //console.log(x);
    //console.log(i);
    return x * 2;
});

//console.log(doble);

// filter

const filtrados = numbers.filter(j => j > 3);
console.log(filtrados);

const nombres = ['Edgar', 'Ana', 'Carlos', 'Sofia', 'Laura', 'Andres', 'Alberto'];
const comienzaA = nombres.filter(nombre => nombre.startsWith('A'));
const comienzaA1 = nombres.filter(nombre => nombre[0] === 'A');

console.log(comienzaA1);
