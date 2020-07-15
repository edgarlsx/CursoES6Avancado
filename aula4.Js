//Symbol = Chave única, não exibe

var UniqueId = Symbol('olá');

var obj = {
    [UniqueId]: 'Helo'
}

console.log(UniqueId)
//console.log(Object.getOwnPropertySymbols(obj.UniqueId)) //forma de ver a propriedade do Symbol, executar no Brouser

Symbol.iterator    //Iteradores, opção de add um elemento.

const arr = [1,2,3,4];

const it = arr[Symbol.iterator]();
const str = 'Digital Inovation One'; // podemos usar com string

for (let value of arr){
    console.log(value);
}

//Objeto
var obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i=0;
        return {
            next: () => {
                i++; //

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

for(var value of obj){
    console.log(value)
}

//Generator => interage com o Symbol
function* hello(){
    console.log('Hello');
    yield 1;

    console.log('From');
    yield 2;

    console.log('Function');
}
const it = hello();
