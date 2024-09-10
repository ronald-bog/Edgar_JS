// METODOS DE ORDEN SUPERIOR DE ITERACION PARA ARRAYS

// forEach: Hace una iteracion por cada elmento del array, y no devuelve nada no tiene retorno.
// sintaxis: array.forEach(callback(elemento, index, array))

const numeros = [10, 11, 12, 13, 14];

//numeros.forEach(elemento => console.log(elemento));

//numeros.forEach(() => console.log('Hola'));

//numeros.forEach(valor => console.log(valor + 10));

//const resultado = numeros.forEach(vr => vr + 10);

//console.log(resultado);

/* numeros.forEach((elem, i) => {
    console.log(elem);
    console.log(i);
}); */

numeros.forEach((ele, index, arreglo) => {
    console.log(ele);
    console.log(index);
    console.log(arreglo);
});

// map: es igual a forEach la unica diferencia es que si retorna un nuevo array