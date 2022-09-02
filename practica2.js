const moment = require('moment')

// fecha actual
const hoy = moment()

const nacimiento = moment("30/11/1995", "DD/MM/YYYY")

const difA = hoy.diff(nacimiento, 'years')
const difD = hoy.diff(nacimiento, 'days')

console.log(`Hoy es: ${hoy.format("DD/MM/YYYY")}`)
console.log(`Nací el: ${nacimiento.format("DD/MM/YYYY")}`)
console.log(`Desde mi nacimiento han pasado: ${difD} días`)
console.log(`Desde mi nacimiento han pasado: ${difA} años`)