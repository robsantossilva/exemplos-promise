const fetch = require('node-fetch');

const url = 'https://api.github.com/emojis';


const exampleAsync = async () => {

    const response = await fetch(url);
    const json = await response.json();
    console.log(json.alien);

}

const responseThenSuccess = (response) => {
    //console.log(response);
    if(!response.ok) {
        throw new Error(`HTTP error,  !!! ${response.status}`)
    }
    return response.json()
};

const responseThenSuccess2 = (response) => {
    console.log(response.alien)
};

const responseCatch = (error) => {
    console.log(error.message)
}

fetch(url)
    .then(responseThenSuccess)
    .then(responseThenSuccess2)
    .catch(responseCatch)

//console.log(requisicao);

//exampleAsync();

console.log('OK')