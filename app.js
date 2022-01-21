const { createTable } = require("./utils")

// aseguro la cantidad de argumentos correcta
if(process.argv.length === 3) {
    let base = process.argv[2]

    // valido que el argumento sea válido
    if(base.length > 7) {
        // selecciono el número desde donde debe ser correcto el parámetro
        base = parseInt(base.slice(7), 10)
        // valido que el argumento ingresado sea un número
        
        if(!isNaN(base)) {
            createTable(base)
            .catch( err => {
                console.log(err)
            })
        }
        else{
            console.log("El argumento ingresado no es un número")
        }

    }
    else {
        console.log("El argumento ingresado no es válido")
    }

} else {
    console.log("Cantidad incorrecta de argumentos")
}

