//Interfaces Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.

enum Color {
    Rojo ="Rojo",
    Verde ="Verde"
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color,
};

let rect: Rectangulo = {
    ancho:4,
    alto:6,
    color: Color.Rojo,
};

function area (r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    return this.color ?  `Un rectangulo ${this.color}` : 'Un Rectangulo'
}

console.log(rect.toString());