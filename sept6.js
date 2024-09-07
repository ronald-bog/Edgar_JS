// Funciones Expresivas: NO HOISTED, Anonimas

const saludo = function () {
    return 'Hola desde expresiva';
};

//console.log(saludo());

// funciones flecha

const flecha = () => {
    console.log('Funcion Flecha');
};

const flecha2 = () => console.log('Funcion Flecha');
//flecha2();

const flechaP = (num1) => {
    return num1 + num1;
};

const flechaP1 = num1 => num1 + num1;

//console.log(flechaP1(15));

const flechaP2 = (n1, n2) => n1 + n2;
//console.log(flechaP2(100, 200));

const flechaP3 = () => {
    const numero = 101;
    return numero;
};

let resultado = flechaP3();
//console.log(resultado);
//console.log(flechaP3());


//// 

function operaciones() {
    let suma = 10 + 20;
    let multi = 5 * 6;
    return suma, multi;
}

console.log(operaciones());

// Desestructuracion o desempaquetamiento de un array 

let arreglo = [99, 101, 75];

let [a, b, c] = arreglo;
console.log(a);
console.log(b);
console.log(c);
console.log(arreglo);

let nombres = ['Ana', 'Sofia', 'Jimena'];

let [persona, x, mujer, qweqwrw] = nombres;

console.log(persona);
console.log(mujer);
console.log(qweqwrw);

// Retorno de multiples valores en una funcion

function retornaVarios() {
    let suma = 10 + 20;
    let multi = 5 * 8;
    return [suma, multi];
}

const [valor1, v2] = retornaVarios();

console.log(valor1);
console.log(v2);

let v1;
let v3;

function x() {
    v1 = 2 + 5;
    v3 = 10;
}