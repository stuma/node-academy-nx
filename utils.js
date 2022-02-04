const fs = require('fs')
var colors = require('colors')

const createTable = async (base, listar) => {
    let content = ''
    content = `${content}=================== \n`
    content = `${content}    Tabla del: ${base}     \n`
    content = `${content}=================== \n`
    for(var i = 1; i <= 10; i++) {
        content = `${content}${base} x ${i} = ${base*i} \n`
    }
    fs.writeFile('output.txt', content, err => {
        if (err) {
            console.error(err.red)
            return
        }
        console.log('file written successfully')

        // si me envían el parámetro para listar, arrojo el console log
        // por default esta en false
        if(listar) console.log(content.rainbow)
    })
}

module.exports = {
    createTable
}