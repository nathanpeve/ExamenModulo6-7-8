// Importarmódulo fs - trabajar con el sistema de archivos
const fs = require('fs');


// Función: recibir mensaje y guardar en log
function log(mensaje) {

    //objeto con date
    const ahora = new Date();

    //solo la fecha en formato YYYY-MM-DD
    // toISOString() devuelve 2026-03-03T12:30:10.123Z--> 2026-03-03 12:30:10.123Z
    // split('T')[0] deja solo parte antes de la T
    const fecha = ahora.toISOString().split('T')[0];

    //hora en formato HH:MM:SS
    // toTimeString(): 12:30:10 GMT-0300 (...)
    // split(' ')[0]deja solo la hora
    const hora = ahora.toTimeString().split(' ')[0];

    // path para construir rutas de forma segura
    const path = require('path');

    //Construir ruta a log.txt
    // __dirname (direction name)
    // ../../logs/log.txt: subir dos niveles y entrar a la carpeta logs
    const rutaLog = path.join(__dirname, `../../logs/log-${fecha}.txt`);


    // Construccion lineas de log
    // \n salto de línea
    const linea = `${fecha} | ${hora} | ${mensaje}\n`;

    // appendFile -  contenido al final del archivo
    // Si el archivo no existe, Node lo crea
    fs.appendFile(rutaLog, linea, (err) => {

        // Si error al escribir, console.log
        if (err) {
            console.error('Error escribiendo log:', err);
        }
    });
}

// Exportamos la función para poder usarla en otros archivos del proyecto
module.exports = log;