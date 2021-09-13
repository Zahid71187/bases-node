const fs = require('fs');
const colors = require('colors');
const crearArchivoTabla = async(base = 5, listar = false, hasta = 10) => {

    try {

        let salida, salidatxt = "";

        for (let i = 1; i <= hasta; i++) {
            let resultado = base * i;

            salida += `${base} ${colors.red('X')} ${i} ${'='.red} ${resultado} \n`;
            salidatxt += `${base} X ${i} = ${resultado} \n`;
        }

        if (listar) {
            console.log('================='.green);
            console.log(` Tabla del: ${colors.green(base)}`.blue);
            console.log('================='.green);
            console.log(salida);
        }


        // fs.writeFileSync(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log('Tabla guardada');
        // });

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salidatxt);

        return 'Tabla guardada';
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivoTabla
}