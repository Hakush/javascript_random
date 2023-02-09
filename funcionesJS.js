///////////////// FUNCIONES PRIMITIVAS //////////

Math.round(num decimal) // redondea un numero hacia arriba o abajo hacia el entero
Math.max(num1,num2)
Math.min(num1,num2)

//Devuelve la longitud del arreglo
array.length

listasIguales(lista1,lista2)

//Agrega estos elementos al arreglo
array.push(element1,element2,element3)

//Elimina el ultimo elemento
array.pop()

//Nos dice la posicion en la que se encuentra elemento
array.indexOf(elemento)
//Lo mismo pero empieza a buscar desde el numero dado
//en el segundo parametro
array.indexOf(elemento,desde)

//Concatenar los arreglos 1 y 2
let array3 = array1.concat(array2);

// Inyecta entre los strings de un array algo
let array = ["hola", "hola", "hola"];
array.join(" ; ");
//result: hola ; hola ; hola

//ordena el arreglo (alfabeticamente en caso de strings)
array.sort();

//Transforma una variable de un tipo a string
toString(var);

//Transforma un string a un numero float o int
parseFloat(string);
parseInt(string);

//largo de un string
let string = "hola";
string.length

//corta el string desde la posicion que pasemos como
//parametro
string.substring(3);

//corta el string desde y hasta las posiciones que pasemos
string.substr(0,5);

//Reemplaza un string o parte de un string por otro
string.replace(string, "Hola Mundo")

//Transforma un string a mayusculas
string.toUpperCase();

//Transforma un string a minusculas
string.toLowerCase()

//DOM Functions: 
//1.- Crear el elemento
    let element0 = document.createElement("h2");
//2.- Crear un nodo de texto
    let contenido = document.createTextNode("Titulo");
//3.- Añadir el nodo de texto al elemento
    element0.appendChild(contenido);
//4.- Agregar atributos al elemento
    element0.setAttribute("align","center");
//5.- Agregar el elemento al documento
    document.getElementById("subtitulo").appendChild(element0);
    //document.body.appendChild(element0);

//Crear un elemento y asignarle contenido
let auxvar0 = document.createElement("li"),
    content = auxvar0.createTextNode("example text");

//Obtener elemento de html por tag o id
let auxvar = document.getElementByTagName("p");
let auxvar2 = document.getElementById("exampleID");

//Modificar texto de un elemento
element.textContent = "new text in element";
element.innerHTML = "new text in element with <b>HTML code</b>"



//////////////// SINTAXIS /////////////////

function nombre(argumento) {
	/*cuerpo*/
	return valor;
}

//funcion autoinvocada
//Todo lo que esta afuera no puede acceder a lo de adentro
//Pero todo lo que esta adentro puede acceder a lo de afuera

(function(){
  //codigo
}())

while(condition) {
  body;
  iterationVariable++;
}

do {
  doesSomethingBeforeConditionCheck
} while(condition);

////////////// OPERADORES ////////////////////

===, >=, >, <,<=

!(expresion) // negar

/////////////// funciones creadas en JS ////////////////

function mitad(num) {
  return num/2;
}

function anterior(num) {
  return num - 1;
}

function triple(num1) {
  return num1*3;
}

function anteriorDelTriple(n) {
  return anterior(triple(n));
} 

function extraer(saldo, monto) {
  return Math.max(saldo - monto, 0);
}

function esDiaFavorito(diaDelMes) {
  return diaDelMes === 1 ;
}

function leGustaLeer(num) {
  return num > 20;
}

function estaEntre(x,y,z) {
  return x > y && x < z;
}

function estaFueraDeRango(a,b,c) {
  return a < b || a > c;
}

function esFinDeSemana(dia) {
  return dia === "sábado" || dia === "domingo";
}

function longitudNombreCompleto(fn,ln) {
  return longitud(fn + " " + ln);
}

function gritar(st) {
  return "¡" +  convertirEnMayuscula(st) + "!";
}

function maximo(x,y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

function signo(n) {
  if (n > 0) {
    return 1;
  } else if (n === 0) {
    return 0;
  } else {
    return -1;
  }
}

function esNumeroDeLaSuerte(n) {
  return n >= 0 && n < 100 && n!== 15;
}

function medallaSegunPuesto(x) {
  if (x===1) {
    return "oro";
  } else if (x===2) {
    return "plata";
  } else if (x===3) {
    return "bronce";
  } else {
    return "nada";
  }
}

function cuantoCuesta(p,m) {
  return 60 * p + 200*m + 1000;
}

function meConviene(p,m) {
  return cuantoCuesta(p,m) < 6000 && p >= 32 && m >= 8;
}

function perimetroTriangulo(x,y,z) {
  return x + y + z;
}

function areaTriangulo(b,a) {
  return (b*a)/2;
}

function perimetroCuadrado(x) {
  return x*4;
}

function areaCuadrado(a) {
  return a*a;
}

function estaAfinado(x) {
  return x === 440;
}

function estaCerca(x) {
  return 437 <= x && x <= 443 && x !==440;
}

function escribirCartelito(ti,no,ap) {
  return ti + " " + no + " " + ap;
}

function escribirCartelito(ti,no,ap,bool) {
  if (bool) {
    return ti + " " + ap;
  } else {
    return ti + " " + no + " " + ap;
  }
}

function escribirCartelitoOptimo(ti,no,ap) {
  return escribirCartelito(ti,no,ap,longitud(no + ap) > 15);
}

function decisionConMoneda(a,b,c) {
  if (a === "cara") {
    return b;
  } else {
    return c;
  }
}

function valorEnvido(x) {
  if (1 <= x && x <=7) {
    return x;
  } else if (10 <=x && x <= 12) {
    return 0;
  } else {
    return "no se juega con esta carta";
  }
}

function puntosDeEnvidoTotales(x,y,a,b) {
  if (y === b) {
    return valorEnvido(x) + valorEnvido(a) + 20;
  } else {
    return Math.max(valorEnvido(x),valorEnvido(a));
  }
}

function valorCantoTruco(c) {
  if (c === "truco") {
    return 2;
  } else if (c === "retruco") {
    return 3;
  } else if (c === "vale cuatro") {
    return 4;
  }
}

function versosMartinFierro() {
  imprimir("Aquí me pongo a cantar")
  imprimir("Al compás de la vigüela;")
  imprimir("Que el hombre que lo desvela")
  imprimir("Una pena extraordinaria")
  return 0;
}

imprimir("Tirando dados");
imprimir("La primera tirada dio " + tirarDado());
imprimir("La segunda tirada dio " + tirarDado());
imprimir("La tercera tirada dio " + tirarDado());

function elefantesEquilibristas(x) {
  return x + " elefantes se balanceaban";
}

function perimetroCirculo(r) {
  return 2*(3.14159265358979)*r;
}

function areaCirculo(r) {
  return 3.14159265358979*r*r;
}

let pi = 3.14159265358979;

function perimetroCirculo(r) {
  return 2*(pi)*r;
}

function areaCirculo(r) {
  return pi*r*r;
}

function cuentaExtravagante(unNumero) {
  let elDoble = unNumero * 2;
  if (elDoble > 10) {
    return elDoble;
  } else {
    return 0;
  }
}

let pesoMaximoEquipajeEnGramos = 5000;

function puedeLlevar(pesoEquipaje) {
  return pesoEquipaje <= pesoMaximoEquipajeEnGramos;
}

let cargaMaximaEnKilogramos = 300

function ascensorSobrecargado(a) {
  return a*pesoPromedioPersonaEnKilogramos > cargaMaximaEnKilogramos;
}

function pasarUnDiaNormal() {
  diasSinAccidentesConVelociraptores = diasSinAccidentesConVelociraptores + 1
}

function tenerAccidenteConVelociraptores() {
  diasSinAccidentesConVelociraptores = 0;
}

function aumentarFortuna() {
  pesosEnMiBilletera = pesosEnMiBilletera*2;
}

function cuentaExtravagante() {
  let numero = 8;
  numero *= 2;
  numero += 4;
  return numero;
}

let mochilaAbierta = true;

function usarCierre() {
  mochilaAbierta = !mochilaAbierta;
}

function esMayorDeEdad(e) {
  return e >= 18;
}

function esMenorDeEdad(e) {
  return !esMayorDeEdad(e);
}

function esPeripatetico(p,n,c) {
  return p === "filósofo" && n === "griego" && c > 2;
}

function esCantanteProlifico (cdsEditados, recitalesRealizados, graboAlgunDVD) {
  return cdsEditados >= 10 && recitalesRealizados > 250 && graboAlgunDVD;
}

function gano(cumplioObjetivoSecreto, cantidadDePaisesConquistados) {
  return cumplioObjetivoSecreto || cantidadDePaisesConquistados >= 30;
}

function estaCerrado(esFeriado, dia, horario) {
  return esFeriado || esFinDeSemana(dia) || !dentroDeHorarioBancario(horario);
}

function esFinDeSemana(dia) {
  return dia === "sábado" || dia === "domingo";
}

function tieneContraste(cl,cf) {
  return (esTonoClaro(cl) && !esTonoClaro(cf)) || (!esTonoClaro(cl) && esTonoClaro(cf));
}

function xor(a,b) {
  return (a && !b) || (!a && b);
}

function pagaConTarjeta(seCobraInteres, tarjeta, efectivoDisponible) {
  return !seCobraInteres && cuotas(tarjeta) >= 3 || efectivoDisponible < 100;
}

function sePuedeConcentrar(bebida,temp,programa) {
  return programa && ((bebida === "mate" && temp === 80 )|| (bebida === "té" && temp >= 95));
}

function puedeSubirse(alt,acomp,afecc) {
  return (alt >= 1.5 || (alt>= 1.2 && acomp)) && !afecc;
}

let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina"]

let numerosDeLoteria = [2, 11, 17, 32, 36, 39];
let tiradasDelDado = [1, 6, 6, 2, 2, 4];
let salioCara = [false, false, true, false];

let unaListaVacia = []

let pertenencias = ["espada", "escudo", "antorcha"];
//longitud(pertenencias) devuelve 3;

agregar(pertenencias, "amuleto mágico");
//ahora longitud(pertenencias) devuelve 4

let unaLista = [1, 2, 3];
let otraLista = [4, 5];

trasladar(unaLista, otraLista, 2);

unaLista //debería ser [1, 3]
otraLista //debería ser [4, 5, 2]

posicion(["a", "la", "grande", "le", "puse", "cuca"], "grande"); //devuelve 2

let diasLaborales = ["lunes", "martes", "miercoles", "jueves", "viernes"]
posicion(diasLaborales, "lunes"); //devuelve 0

function contiene(xs,x) {
  return posicion(xs,x) !== -1;
}

 mesesDelAnio[0]
"enero"
 ["ese", "perro", "tiene", "la", "cola", "peluda"][1]
"perro"

function medallaSegunPuesto(x) {
  let medallas = ["oro","plata","bronce","nada"];
  if (0 <= x && x < longitud(medallas)) {
    return medallas[x-1];
  } else {
    return "nada";
  }
}

function saludar(personas) {
  for(let persona of personas) {
    imprimir("hola " + persona);
  }
}

nombreEstatuaDeLaLibertad = "Estatua de la Libertad";
locacionEstatuaDeLaLibertad = "Nueva York";
anioDeConstruccionEstatuaDeLaLibertad = "1886";
nombreCristoRedentor = "Cristo Redentor";
locacionCristoRedentor = "Rio De Janeiro";
anioDeConstruccionCristoRedentor = "1931";

let torreAzadi = { nombre: "Torre Azadi", locacion: "Teherán, Irán", anioDeConstruccion: "1971"};
let monumentoNacionalALaBandera = { nombre: "Monumento Nacional a La Bandera", locacion: "Rosario, Argentina", anioDeConstruccion: "1957"}

tajMahal
{ nombre: "Taj Mahal", locacion: "Agra, India", anioDeConstruccion: 1653 }

tajMahal.locacion
"Agra, India"
 tajMahal.anioDeConstruccion
1653

function temperaturaDePlaneta(x) {
  return x.nombre + " tiene una temperatura promedio de " + x.temperaturaPromedio + " grados";
}

function moverArchivo(reg,rut) {
  reg.ruta = rut;
}

function esDelMilenioPasado(a) {
  return anio(a.creacion) < 2000
}

let flanCasero = { ingredientes: ["huevos", "leche", "azúcar", "vainilla"], tiempoDeCoccion: 50 }
let cheesecake = { ingredientes: ["frambuesas", "queso crema"], tiempoDeCoccion: 80 }
let lemonPie = { ingredientes: ["jugo de limón", "almidón de maíz", "leche", "huevos"], tiempoDeCoccion: 65 }

function masDificilDeCocinar(postre1,postre2) {
  if (longitud(postre1.ingredientes) >= longitud(postre2.ingredientes)) {
    return postre1;
  } else {
    return postre2;
  }
}

function agregarAPostresRapidos(postresR,postre) {
  if (postre.tiempoDeCoccion <= 60) {
    agregar(postresR,postre);
  }
}

let menuDelDia = {
  platoPrincipal: "bife de lomo",
  ensalada: ["papa", "zanahoria", "arvejas"],
  postre: { ingredientes: ["queso crema", "frambuesas"], tiempoDeCoccion: 80 }
};

function endulzarMenu(menu) {
  agregar((menu.postre.ingredientes),"azúcar");
}

//En julio ganó $50, en agosto perdió $12, etc
let balancesUltimoSemestre = [
  { mes: "julio", ganancia: 50 }, 
  { mes: "agosto", ganancia: -12 }, 
  { mes: "septiembre", ganancia: 1000 }, 
  { mes: "octubre", ganancia: 300 }, 
  { mes:  "noviembre", ganancia: 200 }, 
  { mes: "diciembre", ganancia: 0 }
];

function gananciaSemestre(balances) {
  return balances[0].ganancia + balances[1].ganancia +
         balances[2].ganancia + balances[3].ganancia +
         balances[4].ganancia + balances[5].ganancia;
}

 gananciaTotal([
      { mes: "enero", ganancia: 2 }, 
      { mes: "febrero", ganancia: 3 }
  ])
 gananciaTotal([
      { mes: "enero", ganancia: 2 }, 
      { mes: "febrero", ganancia: 3 }, 
      { mes: "marzo", ganancia: 1 }, 
      { mes: "abril", ganancia: 8 }, 
      { mes: "mayo", ganancia: 8 }, 
      { mes: "junio", ganancia: -1 }
  ])
 gananciaTotal([])

 gananciaTotal([
      { mes: "enero", ganancia: 2 }, 
      { mes: "febrero", ganancia: 3 }
  ])
 gananciaTotal([
      { mes: "enero", ganancia: 2 }, 
      { mes: "febrero", ganancia: 3 }, 
      { mes: "marzo", ganancia: 1 }, 
      { mes: "abril", ganancia: 8 }, 
      { mes: "mayo", ganancia: 8 }, 
      { mes: "junio", ganancia: -1 }
  ])
 gananciaTotal([])

 function gananciaTotal0(balancesDeUnPeriodo) {
  let sumatoria = 0;
  return sumatoria;
}

function gananciaTotal1(balancesDeUnPeriodo) {
  let sumatoria = 0;
  sumatoria = sumatoria + balancesDeUnPeriodo[0].ganancia;
  return sumatoria;
}

function gananciaTotal2(balancesDeUnPeriodo) {
  let sumatoria = 0;
  sumatoria = sumatoria + balancesDeUnPeriodo[0].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[1].ganancia;
  return sumatoria;
}

function gananciaTotal3(balancesDeUnPeriodo) {
  let sumatoria = 0;
  sumatoria = sumatoria + balancesDeUnPeriodo[0].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[1].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[2].ganancia;
  return sumatoria;
}

function gananciaTotal4(balancesDeUnPeriodo) {
  let sumatoria = 0;
  sumatoria = sumatoria + balancesDeUnPeriodo[0].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[1].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[2].ganancia;
  sumatoria = sumatoria + balancesDeUnPeriodo[3].ganancia;
  return sumatoria;
}

function gananciaTotal(balancesDeUnPeriodo) {
  let sumatoria = 0;
  for (let balance of balancesDeUnPeriodo) {
    sumatoria = sumatoria + balance.ganancia;
  }
  return sumatoria;
}

function cantidadDeBalancesPositivos(balancesDeUnPeriodo) {
  let cantidad = 0;
  for (let balance of balancesDeUnPeriodo) {
    if (balance.ganancia > 0) {
      cantidad = cantidad + 1;
    }
  }
  return cantidad;
}


function gananciaPromedio(balances) {
  return (gananciaTotal(balances) / longitud(balances));
}

function balancePositivo(b) {
  return b.ganancia > 0;
}

function gananciaPositiva(balances) {
  let sumatoria = 0
  for (let balance of balances) {
    if (balancePositivo(balance)) {
      sumatoria = sumatoria + balance.ganancia;
    }
  }
  return sumatoria;
}

function promedioGananciasPositivas(balances) {
  return (gananciaPositiva(balances) / cantidadDeBalancesPositivos(balances));
}


function ganancias(balancesDeUnPeriodo) {
  let ganancias = [];
  for (let balance of balancesDeUnPeriodo) {
    agregar(ganancias,balance.ganancia)
  }
  return ganancias;
}


function balancesPositivos(balancesDeUnPeriodo) {
  let balances = [];
  for (let balance of balancesDeUnPeriodo) {
    if (balance.ganancia > 0) {
      agregar(balances,balance);
    }
  }
  return balances;
}

function gananciasDeBalancesPositivos(balancesDeUnPeriodo) {
  return ganancias(balancesPositivos(balancesDeUnPeriodo));
}

function promedioDeBalancesPositivos(balancesDeUnPeriodo) {
  return promedio(gananciasDeBalancesPositivos(balancesDeUnPeriodo));
}

function maximaGanancia(balancesDeUnPeriodo) {
  return maximo(ganancias(balancesDeUnPeriodo));
}

function minimaGananciaPositiva(balances) {
  return minimo(ganancias(balancesPositivos(balances)));
}

function meses(balances) {
  let mesesM = []
  for (let balance of balances) {
    agregar(mesesM,balance.mes)
  }
  return mesesM;
}

function afortunados(balances) {
  let afortunads = []
  for (let balance of balances) {
    if (balance.ganancia > 1000) {
      agregar(afortunads,balance)
    }
  }
  return afortunads;
}

function mesesAfortunados(balances) {
  return meses(afortunados(balances));
}



