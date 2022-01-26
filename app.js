const { createTable } = require("./utils")
var colors = require('colors')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// aseguro que el argumento ingresado sea correcto
if (argv.base && typeof argv.base === 'number') {
    createTable(argv.base)
        .catch(err => {
            console.log(err)
        })
} else {
    console.log("Argumento inválido")
}

