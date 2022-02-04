const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar'
    })
    .options({
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            demandOption: false,
            description: 'Muestra la tabla en la consola'
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

module.exports = {
    argv
}