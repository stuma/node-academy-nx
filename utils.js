const fs = require('fs')
var colors = require('colors')

const createTable = async (base) => {
    let content = ''
    for(var i = 1; i <= 10; i++) {
        content = `${content}${base} x ${i} = ${base*i} \n`
    }
    fs.writeFile('output.txt', content, err => {
        if (err) {
            console.error(err.red)
            return
        }
        console.log('file written successfully')
        console.log(content.rainbow)
    })
}

module.exports = {
    createTable
}