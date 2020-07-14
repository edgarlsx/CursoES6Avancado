// Rest Operator (...), spread operator
function sumOld(...args){
    return args.reduce((x, value) => x + value, 0);

}

var multiplicar = (...args) => args.reduce((x, value) => x * value, 1);

var sum = (...rest) => { 
    return multiplicar.apply(undefined, rest);
};

//spread operator
//strings, Arrays, Objetos
var sum2 = (...rest) => { 
    return multiplicar(...rest);
};

//spread operator
//Quebra a string por caracter
const str = 'Digital Inovation One';
var strArgs = (...args) => {
    return args;
}

console.log(sum2(10,13,14,5,6,7))
console.log(multiplicar(2,3,4,5,6,7))
console.log(strArgs(...str))