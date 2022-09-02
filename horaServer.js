const http = require('http')

const server = http.createServer((req, res) => {
    const date = new Date()
    const horaActual = date.getHours()
    
    if(horaActual >= 6 && horaActual <= 12) {
        res.end('Buenos días!')
    } else if (horaActual >= 13 && horaActual <= 20) {
        res.end('Buenas tardes!')
    }else{
        res.end('Buenas noches!')
    }
})
/* 
const conn = server.listen(8080, () => {
    console.log(`Servidor activo en el puerto : ${conn.address().port}`)
}) */