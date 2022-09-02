// Funcion que genere números al azar del 1 al 20

const numeros = {}

function numAleatorio() {
    return parseInt(Math.random() * 20) + 1;
}

for(let i = 0; i < 10000; i++){
    const alAzar = numAleatorio()
    if (!numeros[alAzar]){
        numeros[alAzar] = 0
    }
    numeros[alAzar]++
}

console.log(numeros)