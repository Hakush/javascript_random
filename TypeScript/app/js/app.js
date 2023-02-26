"use strict";
let message = "Hello World";
console.log(message);
let persona = { nombre: "Ana", edad: 45 };
var obj = { a: 1, b: 2, c: 3 };
console.log(obj.c);
var array = [1, 2, 3, 4];
console.log(array[2]);
var array2 = [1, 2, 3, 6];
var [x, y, ...rest] = array2;
console.log(rest);
/*function rest0(first, second, ...allOthers) {
    console.log(allOthers);
}*/
//rest0(1,2,3,4,5,6,7,8,9,0,10);
let nombre = '1';
//Casting
nombre.toUpperCase();
class Persona {
    constructor(nombre, apellido, yearNac, dir, cellphone, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.yearNac = yearNac;
        this.dir = dir;
        this.cellphone = cellphone;
        this.email = email;
    }
    toString() {
        return this.nombre + '' + this.apellido;
    }
    edad(yearActual) {
        return (yearActual - this.yearNac);
    }
    get Nombre() {
        return (this.nombre);
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }
    get Apellido() {
        return (this.apellido);
    }
    set Apellido(apellido) {
        this.apellido = apellido;
    }
}
let persona1 = new Persona('Facundo', 'Sharry', 2001, 'Cordoba, Argentina', '3547563095', 'facundo.sharry@gmail.com');
class Operacion {
    constructor(valorA, valorB) {
        this.valorA = valorA;
        this.valorB = valorB;
        this.resultado = NaN;
    }
}
class Suma extends Operacion {
    Sumar() {
        return (this.resultado = this.valorA + this.valorB);
    }
}
class Resta extends Operacion {
    Restar() {
        this.resultado = this.valorA - this.valorB;
    }
}
let newSuma = new Suma(2, 3);
newSuma.Sumar();
console.log("El resultado de la suma es " + newSuma.resultado);
