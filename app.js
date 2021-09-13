//imprimir tabla del 5
const { boolean } = require('yargs');
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();
// console.log(process.argv);
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);
//let base = 7;

// console.log(process.argv);
// console.log(argv);
console.log('base: yargs', argv.b);
console.log('listar:', argv.l);
console.log('hasta:', argv.h);

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(archivo => console.log(archivo.rainbow))
    .catch(err => console.log(err));