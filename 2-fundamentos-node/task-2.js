const fs = require('fs')

let content = ''

for(var i = 1; i <= 10; i++) {
    content = `${content}5 x ${i} = ${5*i} \n`
}

fs.writeFile('output.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    //file written successfully
})

