const newPromise = new Promise((resolve, reject) => {
    const number = 37
    if(number == 37){
        resolve('Sucesso');
    }else{
        reject('Erro');
    }
})

newPromise
    .then((value) => {
        console.log(value);
    }).catch((erro) => {
        console.log(erro+"!!");
    })

// newPromise
//     .then( valor => valor)
//     .then(valor => console.log(valor))
//     .catch((error) => {
//         console.log("Error", error)
//     })


console.log('teste')