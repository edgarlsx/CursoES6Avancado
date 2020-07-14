var funcSomaOld = function(a,b){ //Modo de escrever funcões
    return a + b;
}

var soma = (a,b) => a + b; //Arrow Functions ( => )
console.log(soma(3,5));

var createObj = () => ({ teste : 123 });
console.log(createObj());

var obj = {
    seconds: 2000,
    showContext: function showContext(){
        setTimeout(() => {
            this.log(`after ${this.seconds}ms`);
        }, this.seconds);
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext();