//https://github.com/Ecob1
// FOR

/* for (let i = 0; i <= 5; i++) {
    console.log(i);
} */

const nombres = ['Edgar', 'Sofia', 'Luis', 'Ana'];

/* for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
} */

// for ..of

//for (let nombre of nombres) console.log(nombre);

const carro = {
    marca: "Mazda",
    anio: 2024,
    color: 'Rojo'
};

/* for (let prop in carro) {
    console.log(prop);
} */

// funciones

// Funciones declarativas, hoisted

function saludar() {
    console.log('Hola Mundo');
}

function saludarR() {
    return 'Hola desde funcion con retorno';
}

let prueba = saludar();
let pruebaR = saludarR();

console.log('probando que tiene la variable prueba:' + prueba);

console.log('probando que tiene la variable pruebaR:' + pruebaR);

function saludarP(zz) {
    console.log(`Hola, ${zz}`);
}

saludarP('Sofia');

function suma(num1, num2, num3) {
    return num1 + num2 + num3;
}

const resultado = suma(10, 20, 30);

console.log(resultado);

// Funciones Expresivas: NO HOISTED, Anonimas