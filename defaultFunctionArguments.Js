 // Default Arguments = posso informar um valor padrão na declaração da função 
 // Ex. ( b = numeroRandom )
var numeroRandom = () => (Math.floor(Math.random() * 10));

function multiplicar(a, b = numeroRandom()){
    return a * b;
};
console.log(multiplicar(3));
//
//Atribuindo propriedade para o objeto
//Formas de declarar os objetos.
var prop1 = 'Testo da minha propriedade.';
var obj = {
    prop1
}
console.log(obj)

var obj = {
    somar: (a, b) => a + b,
    multiplicar: (a, b) => a * b,
    prop1
    // sum: function sum(a,b){
    //     return a + b;
    // }
};
console.log(obj.somar(5,2));
console.log(obj.multiplicar(5,2));
console.log(obj.prop1);

var obj = {
    [prop1 + ' concat']: ' valor da propriedade.'
};

console.log(obj);

var obj = {
    sleep: function() {
        setTimeout(() => {
        console.log(this);
        }, 1000);
    }
}

obj.sleep();
