//Funciones

function add(a: number, b: number): number{
    return a + b;
}

const sum = add(4, 4);

//Funciones

function createAdder (a:number): (number) => number {
    return function(b: number){
        return b + a;
    }
}

const addFour=createAdder(4)
const fourPlus6 = addFour(6)

//Funciones
function fullName(firstName: string, lastName?: string): string{
    return `${firstName} ${lastName}`;
}

const richar= fullName('Richard');
console.log(richar);

//Funciones
function fullName2(firstName: string, lastName: string = 'Smith'): string{
    return `${firstName} ${lastName}`;
}

const richar2= fullName2('Agente');
console.log(richar2);