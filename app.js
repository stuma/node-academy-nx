const { createTable } = require("./utils")

createTable()
.catch( err => {
    console.log(err)
})