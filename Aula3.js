//Como usar Destructuring em ReactJS

var arr = ['Maça', 'Banana', ['Laranja']];

//Nomal
var maca = arr[0];
var banana = arr[1];
var laranja = arr[2][0];

//Destructuring Assignment 
var [maca2, banana2, [laranja2]] = ['Maça', 'Banana', ['Laranja']]

console.log(maca2, banana2, laranja2)

//Propriedades de objetos
// forma de ler o Objeto
var obj = {
    nome: 'Edgar',
    idade: 25,
    props: {
        cor: 'Branco'
    }
};

var {nome, idade: idade2, props: {cor}} = obj;

console.log({nome, idade2, cor})
console.log(obj)