// Considere la siguiente frase: ‘Frase inicial’
// Realizar una aplicación de servidor node.js con express que incorpore las siguientes rutas:
// GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
// GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra hallada en la frase en la posición dada (considerar que la primera palabra es la #1.
// POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al final de la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.
// PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en la frase aquella hallada en la posición dada. Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, y en el campo ‘anterior’ la anterior
// DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada (considerar que la primera palabra tiene posición #1).

// Aclaraciones:
// Utilizar Postman para probar la funcionalidad.
// El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

const express = require ('express')
const app = express()

app.use(express.json())
// app.use(express.urlencoded({extended: true}))

let palabras = ['Frase', 'inicial']

app.get('/api/frase', (req, res) => {
    res.send({ frase: palabras.join(' ') })
})

app.get('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params
    const palabra = palabras[pos - 1]
    res.send({ buscada: palabra})
})

app.post('/api/palabras', (req, res) => {
    const { palabra } = req.body
    palabras.push(palabra)
    res.send({ agregada: palabra, pos: palabras.length})
})

app.put("/api/palabras/:pos", (req, res) => {
    const { pos } = req.params
    const { palabra } = req.body
    const anterior = palabras[pos - 1]
    palabras[pos - 1] = palabra
    res.send({ actualizada: palabra, anterior })
})

app.delete("/api/palabras/:pos", (req, res) => {
    const { pos } = req.params
    const palabra = palabras[pos-1]
    palabras = palabras.filter((palabra) => palabra !== palabras[pos - 1])
    res.send({ eliminada: palabra })
})  

app.listen(8080, () => {
    console.log("Servidor iniciado")
})