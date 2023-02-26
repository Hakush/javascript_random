let message:string = "Hello World";
console.log(message);

let persona:Object={nombre:"Ana",edad:45};

var obj={a:1,b:2,c:3};
console.log(obj.c);

var array=[1,2,3,4];
console.log(array[2]);

var array2=[1,2,3,6];
var [x,y, ...rest]= array2;
console.log(rest);

/*function rest0(first, second, ...allOthers) {
	console.log(allOthers);
}*/

//rest0(1,2,3,4,5,6,7,8,9,0,10);

let nombre = '1';
//Casting
(<string>nombre).toUpperCase();

class Persona {
	private nombre:string;
	private apellido:string;
	private yearNac:number;
	private dir:string;
	private cellphone:string;
	private email:string;

	constructor(nombre:string, apellido:string, yearNac:number, dir:string, cellphone:string, email:string) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.yearNac = yearNac;
		this.dir = dir;
		this.cellphone = cellphone;
		this.email = email;
	}

	public toString():string {
		return this.nombre + '' + this.apellido;
	}

	public edad(yearActual:number):number {
		return (yearActual - this.yearNac);
	}

	get Nombre():string {
		return(this.nombre);
	}

	set Nombre(nombre:string) {
		this.nombre = nombre;
	}

	get Apellido():string {
		return(this.apellido);
	}

	set Apellido(apellido:string) {
		this.apellido = apellido;
	}
}

let persona1 = new Persona('Facundo','Sharry',2001,'Cordoba, Argentina','3547563095','facundo.sharry@gmail.com');

class Operacion {
	protected valorA:number;
	protected valorB:number;
	protected resultado:number;

	constructor(valorA:number, valorB:number) {
		this.valorA = valorA;
		this.valorB = valorB;
		this.resultado = NaN;
	}

	//Setters y Getters
}

class Suma extends Operacion {
	Sumar() {
		return(this.resultado = this.valorA + this.valorB);
	}
}

class Resta extends Operacion {
	Restar() {
		this.resultado = this.valorA - this.valorB;
	}
}

let newSuma = new Suma(2,3);
newSuma.Sumar();
console.log("El resultado de la suma es " + newSuma.resultado);
