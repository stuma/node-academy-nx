const { createTable } = require('./utils')
const { argv } = require('./config/yargs')

createTable(argv.base, argv.listar)
	.catch(err => {
		console.log(err)
	})


