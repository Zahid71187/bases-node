const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            type: 'number',
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            // demandOption: true,
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: true,
            describe: 'Hasta que número llegara la multiplicación'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }

        if (typeof argv.l !== 'boolean') {
            throw 'l debe ser booleano';
        }

        if (isNaN(argv.h)) {
            throw 'h debe ser un número';
        }

        return true;
    })
    .argv;

module.exports = argv;