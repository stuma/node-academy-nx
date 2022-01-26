const { createTable } = require("./utils")
var colors = require('colors')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .options({
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            demandOption: false
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw new Error("La base tiene que ser un numero")
        }
        else {
            if (argv.base < 0 || argv.base > 20) {
                throw new Error("Debes colocar un valor de base entre 1 y 20")
            }
            else {
                return true
            }
        }
    }).argv

    createTable(argv.base, argv.listar)
    .catch(err => {
        console.log(err)
    })

// aseguro que el argumento ingresado sea correcto
/* if (argv.base && typeof argv.base === 'number') {
    createTable(argv.base)
        .catch(err => {
            console.log(err)
        })
} else {
    console.log("Argumento inválido")
} */

