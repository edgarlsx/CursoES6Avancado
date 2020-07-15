//Callbacks e Promises

//Promises 
const doSomeThingPromise = () => new Promise((resolved, reject) =>{
    //throw new Error('Algo deu Errado.')
    setTimeout(function(){
        resolved('First data');
    },1000);
});

const doOtherThingPromise = () => new Promise((resolved, reject) =>{
    //throw new Error('Algo deu Errado.')
    setTimeout(function(){
        resolved('Second data');
    },1000);
});

console.log(doSomeThingPromise) //Status Pendente

//status com dados e tratando erros
// doSomeThingPromise
//     .then(data => console.log(data))
//     .catch(error => console.log(error)); 

//chamando as duas promises sequencialmente
// doSomeThingPromise()
//     .then(data => {console.log(data); 
//         return doOtherThingPromise();
//     })
//     .then(data2 => console.log(data2))
//     .catch(error => console.log('Ops', error)); 
//

//chamando as duas promises ao mesmo tempo
Promise.all([doSomeThingPromise(), doOtherThingPromise()])
    .then(data => {
        console.log(data[0].split(''), data[1]);
    })
    .catch(err => console.log('Ops...', error))
