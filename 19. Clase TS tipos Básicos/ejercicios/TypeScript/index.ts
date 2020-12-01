//Boolean
let muted: boolean = true;
muted = false;

//Números
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

//String
let nombre: string ="Richard";
let saludar = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
    //people.push("9000")
    let peopleAndNumbers: Array<string | number> = [];
    peopleAndNumbers.push("Ricardo");
    peopleAndNumbers.push(9001);

//Enun
enum Color {

    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
    Amarillo = "Amarillo",
}

let colorFavorito: Color.Verde
console.log(`Mi color favorito es ${colorFavorito}`)

//Any
let comodin: any = "Joker";
comodin = {type: 'WildCard'};

//Object
let someObject: object = {type: 'WildCard'};