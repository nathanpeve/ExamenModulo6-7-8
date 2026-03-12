const log = require('../utils/fileLogger');

//def - funcion nombre
function loggerMiddleware(req, res, next) {

    if (
        req.originalUrl.endsWith('.html') ||
        req.originalUrl.startsWith('/api') ||
        req.originalUrl === '/'
    ) {
        log(`${req.method} ${req.originalUrl}`);
    }

    next(); // Continuar siguiente middleware
}

// Exportar funcion
module.exports = loggerMiddleware;