const fs = require('fs')

const createTable = async (base) => {
    let content = ''
    for(var i = 1; i <= 10; i++) {
        content = `${content}${base} x ${i} = ${base*i} \n`
    }
    fs.writeFile('output.txt', content, err => {
        if (err) {
            console.error(err)
            return
        }
        console.log('file written successfully')
        console.log(content)
    })
}

module.exports = {
    createTable
}