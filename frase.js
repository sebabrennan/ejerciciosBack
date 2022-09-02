// Dada la siguiente constante: const frase = 'Hola mundo cómo están'
// Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:

// 1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
// 2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
// 3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.

// Aclaraciones:
// - En el caso de las consignas 2) y 3), si se ingresa un parámetro no numérico o que esté fuera del rango de la cantidad total de letras o palabras (según el caso), el servidor debe devolver un objeto con la descripción de dicho error. Por ejemplo:
// { error: "El parámetro no es un número" } cuando el parámetro no es numérico
// { error: "El parámetro está fuera de rango" } cuando no está entre 1 y el total de letras/palabras
// - El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.



const express = require ('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
const frase = "Hola mundo como están"

app.get('/api/frase', (req, res) => {
    res.send({frase})
})

app.get('/api/letra/:num', (req, res) => {
    const {num} = req.params
    if(isNaN(parseInt(num))) {
        res.status(403).send({ error: true, msg: "no numérico" })
    } else {
        res.send(frase[num - 1])
    }
})

app.get('/api/palabra/:num', (req, res) => {
    const {num} = req.params
    if (isNaN(parseInt(num))) {
        res.status(403).send({ error: true, msg: "no numérico" })
    } else {
        const palabras = frase.split(" ")
        res.send(palabras[num - 1])
    }
})

app.listen(8080, () => {
    console.log("Servidor iniciado")
})