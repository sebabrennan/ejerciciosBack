function mostrarLetras (palabra, cb) {

    let i = 0;
    const timer = setInterval (() => {
            if (palabra.length > i){
                console.log(palabra[i])
                i++
            }else {
                clearInterval(timer);
                cb();
            }
        }, 1000);
};

const fin = () => console.log ('terminé')

setTimeout(() => {mostrarLetras("hola", fin)}, 0)
setTimeout(() => {mostrarLetras("hola", fin)}, 250)
setTimeout(() => {mostrarLetras("hola", fin)}, 500)
