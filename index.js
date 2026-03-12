/* Cargar variables de entorno
    - read .env y deja disponibles valores dentro de process.env.
    - PORT=3000 */
require('dotenv').config();


/* Logger propio del sistema
    - Función para escribir mensajes
    - dentro del archivo logs/log.txt. */
const log = require('./src/utils/fileLogger');


/* Middleware de logging
    - Ejecuta automáticamente cada vez que alguien acceda al sistema (una página o una API).
    - registra actividad sin repetir código. */
const loggerMiddleware = require('./src/middlewares/logger.middleware');


/* Librerías principales
    express : framework para crear servidores web
    cors    : permite que otros sistemas puedan consumir API
    path    : manejar rutas de carpetas */
const express = require('express');
const cors = require('cors');
const path = require('path');


/* Crear la aplicación Express */
const app = express();


/* CONFIGURACIÓN GLOBAL (MIDDLEWARES)
    - Todo lo que se define aquí se aplica automáticamente a cada petición que llegue al servidor
    - Permite que aplicaciones externas puedan conectarse a nuestra API (Ej: frontend en otro puerto).*/
app.use(cors());


/* Permite que Express entienda datos JSON enviados desde formularios o APIs - leer los body */
app.use(express.json());


/* Middleware propio que registra accesos en el log. Se ejecuta antes de llegar a cualquier ruta. */
app.use(loggerMiddleware);


/* Publica carpeta "public".
    archivos HTML, CSS y JS pueden abrirse directamente desde el navegador.
    Ejemplo:    http://localhost:3000/index.html*/
app.use(express.static(path.join(__dirname,'public')));



/*RUTAS DE API*/


/*
Ruta Test: verifica API funciona. en formato msg json*/
app.get('/api/status', (req, res) => {
    res.json({ mensaje: 'API funcionando.' });
});

app.get('/api/help', (req, res) => {
    res.json({ mensaje: 'Prueba de API funcionando' });
});


/* INICIO DEL SERVIDOR /*

/*Puerto donde correrá la aplicación.
    - Si existe PORT en .env lo usa,
    - si no, utiliza 3000 por defecto.*/
const PORT = process.env.PORT || 3000;


/*Log iniciando servicio.*/
log("Servidor iniciando, Puerto a funcionar: " + PORT);


/*Levanta server y comienza a escuchar peticiones.*/
app.listen(PORT, () => {
  console.log('Servidor funcionando: Puerto ' + PORT);
});