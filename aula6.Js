// fetch, Async/Await e EventEmitter

// fetch('http://localhost:8080/data.json')
//     .then(responseStream => {
//         if(responseStream.status === 200){
//             return responseStream.json();
//         }else{
//             throw new Error('Request error');            
//         }
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {console.log('Erro:', err );
// })

//************** Async / Await *****************/
const simpleFuncOld = async () => {
    //throw new Error('Oh no!');
    return 12345;
};
// simpleFuncOld().then(data =>{
//     console.log(data);
// }).catch(err =>{
//     console.log(err)
// })

const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000)
})

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;

    // posso adicionar o fetch dessa forma.
    // const dataJson = await fetch('/data.json').then(resStream => resStream.json());
    // return dataJson;
};

const simpleFunc = async () => {
    const data = await asyncTimer();
    return data;

    // posso adicionar o fetch dessa forma.
    // const dataJson = await fetch('/data.json').then(resStream => resStream.json());
    // return dataJson;
};



simpleFunc().then(data =>{
    console.log(data, dataJson);
}).catch(err =>{
    console.log(err)
})
