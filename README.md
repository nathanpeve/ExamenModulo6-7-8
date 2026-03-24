## Autor: Natanael Pérez Veas - 2026
Proyecto base para desarrollo educativo y demostraciones prácticas con Node.js y Express.
	
	- Drive: https://drive.google.com/drive/folders/1lGqvrUBW5FkHk1dxDfoK6VnQ6l9gPoQc?usp=sharing
	- Proyecto Github: https://github.com/nathanpeve/ExamenModulo6

# PARTE 1 Instrucciones de Instalación: #

##  Requisitos del sistema:
	Software:
		Node.js Version 18 hacia arriba
		Sistema Operativo Windows 10/11, MacOS o Linux
	Dependencias del proyecto:
		Instalación de Node
		Instalación de express, cors y dotenv
		instalación de nodemon
		instalación de pg
	Cliente:
		Navegador Web
		Conexión a Internet

##  Cómo instalar Librerías:
	- Abrir CMD en directorio del proyecto (raíz)
	- Instalar express, cors y dotenv:
		Comando: npm install express cors dotenv pg
	- Instalar nodemon:
		Comando: npm install nodemon --save-dev


## Cómo ejecutar  proyecto:
	- IMPORTANTE: Para que el sistema funcione necesita un archivo .env en la raíz con PORT=, DATABASE_URL= y PORTAFOLIO_JWT_SECRET=
	- abrir cmd en raíz
	- Comando: 	 npm run dev 	= Ejecutar en modo desarrollo
	- Comando:	 npm run start  = Ejecutar en modo producción
		El sistema funciona cuando cmd indica que el puerto 3000 se encuentra en funcionamiento
	- Abrir navegador
	- Ingresar en barra de URL `localhost:3000`
		Se iniciará una pantalla de Login, la cual proviene de index.html
	- Credenciales de Usuario:
		- Usuario: user
		- Contraseña: 0 
		Si el sistena funciona correctamente, se abrirá principal.html

-------------------------------------------------------------------------------------------------------------------------------

# PARTE 2 Estructura y Objetivos de Proyecto # 

## App-01 — Node Express WebApp
	- Aplicación web base construida con **Node.js + Express**, diseñada como punto de partida para un sistema de gestión de cartera de inversiones.

El proyecto expone:

	-  Frontend estático (HTML, CSS, JS)
	-  API REST de ejemplo
	-  Sistema de logging a archivo
	-  Estructura preparada para crecimiento modular

##  Objetivo del proyecto

	Servir como base simple y ordenada para futuras funcionalidades:
	- Ingreso de compras
	- Ingreso de ventas
	- Consulta de cartera
	- Integración con base de datos
	- Autenticación de usuarios

## Tecnologías utilizadas

	- Node.js
	- Express
	- CORS
	- dotenv
	- MSSQL (preparado para futuras versiones)
	- Nodemon (desarrollo)

##  Estructura del proyecto
ExamenModulo6-7-8/  
│   .env  
│   .gitignore  
│   .prettierrc  
│   index.js  
│   package-lock.json  
│   package.json  
│   README.md  
│  
├───logs  
│  
├───node_modules  
│  
├───precios-mercado  
│       precios-18marzo.txt  
│       precios-19marzo.txt  
│  
├───public  
│   │   compra-v1.html  
│   │   compra.html  
│   │   default.html  
│   │   emisor.html  
│   │   index.html  
│   │   instrumento.html  
│   │   operaciones.html  
│   │   precios.html  
│   │   principal.html  
│   │  
│   ├───img  
│   │       portafolio-logo.jpg  
│   │  
│   └───js  
│           compra.js  
│           default.js  
│           emisor.js  
│           instrumento.js  
│           login.js  
│           menu.js  
│           operaciones.js  
│           precios.js  
│           principal.js  
│  
├───src  
│   ├───config  
│   │       database.js  
│   │       sequelize.js  
│   │  
│   ├───controllers  
│   │       authController.js  
│   │       emisorController.js  
│   │       fondoController.js  
│   │       instrumentoController.js  
│   │       menuController.js  
│   │       nemotecnicoController.js  
│   │       operacionController.js  
│   │       precioController.js  
│   │  
│   ├───middlewares  
│   │       authMiddleware.js  
│   │       logger.middleware.js  
│   │       upload.js  
│   │  
│   ├───models  
│   │       emisorModel.js  
│   │       fondoModel.js  
│   │       instrumento.js  
│   │       instrumentoModel-sql.js  
│   │       instrumentoModel.js  
│   │       nemotecnicoModel.js  
│   │       operacionModel.js  
│   │       precioModel.js  
│   │  
│   ├───routes  
│   │       .prettierrc  
│   │       authRoutes.js  
│   │       emisorRoutes.js  
│   │       fondoRoutes.js  
│   │       instrumentoRoutes.js  
│   │       menuRoutes.js  
│   │       nemotecnicoRoutes.js  
│   │       operacionRoutes.js  
│   │       precioRoutes.js  
│   │  
│   ├───services  
│   │       authService.js  
│   │       emisorService.js  
│   │       instrumentoService.js  
│   │       menuService.js  
│   │  
│   ├───sql  
│   │       create-tables-sistema.sql  
│   │       insert-tables-sistema.sql  
│   │       update-menu.sql  
│   │  
│   └───utils  
│           fileLogger.js  
│           response.js  
│  
└───uploads  
        1773881753740.txt  

## Convenciones del proyecto

	* `/public` → archivos visibles por el navegador
	* `/src` → lógica del backend
	* `/utils` → herramientas reutilizables
	* `/middlewares` → lógica transversal (logging, auth, etc.)

## Próximas versiones
	- Trabajo ABP 8 - 
		- Estructurar  las  respuestas  de  la  API  con  formato  consistente  (  status, message, data  ). 

-------------------------------------------------------------------------------------------------------------------------------

# PARTE 3 - Objetivos de Examen Módulo 7 y Cumplimientos # 

## 1.- Conexión a una base de datos: ##
	- Configurar una conexión estable y segura entre el servidor Node y una base de datos relacional (MySQL)
			✔ Se implementò PostgreSQL Neon
	- Crear la base de datos y al menos 1 tabla principal.
			✔ se crearon más de 12 tablas, como usuario, emisor etc. (en archivos auth.js se pueden ejemplificar)
	- Utilizar mysql2, pg o el paquete ORM elegido para establecer la conexión. 
			✔ se ocupa pg
	- Almacenar credenciales en variables de entorno. 
			✔ index.js linea 23
	- Archivo .env con las claves ocultas. 
			✔ 
	- Log en consola al conectar con éxito. 
			✔ ejemplo en index.js linea 46-47
	- Justificación esperada:
		- ¿Por qué elegiste ese cliente de conexión? 
		- ¿Cómo se protegen los datos sensibles? 
			✔ se eligió pg por manejo asincronico y sencillez de uso, se protegen los datos sensibles para evitar robos

## 2.- Obtención de información desde una base de datos ##
	- Consultar información almacenada y presentarla desde rutas del backend. 
			✔ routes.js
	- Crear una ruta GET /usuarios que devuelva los datos de la tabla.
			✔ index.js, linea 31 en adelante
	- Procesar los resultados antes de enviarlos (evitar contraseñas o datos sensibles). 
			✔ login gracias a authServide.js
	- Validar errores de conexión o consulta. 
			✔ gracias a funciones error, como en response.js
	- Al menos 3 registros simulados . 
			✔ tablas con contenido en Neon
	- Respuesta en JSON clara y ordenada. 
			✔ gracias a response.js
	- Implementar paginación o filtrado por query params (?nombre=Juan). 
			✔ operacionRoutes.js

## 3.- Modificación de datos en una base de datos ##
	- Incorporar operaciones de actualización y eliminación controladas sobre los datos existentes. 
			✔ incorporado en tablas emisor, emisorService.js como ejemplo
	- Ruta  PUT /usuarios/:id  para modificar un registro. 
			✔ emisorService.js 
 	- Ruta  DELETE /usuarios/:id con validación previa de existencia. 
			✔ emisorService.js
	- Validar errores y devolver mensajes útiles. 
			✔ response.js, index.js pantalla login cuando contraseña en incorrecta
	- Confirmación de éxito en ambas operaciones. 
			✔ function success de response.js
	- Validación de ID existente. 
		- ¿Por qué decidiste actualizar sólo ciertos campos? 
		- ¿Qué validaciones aplicaste para evitar errores? 
			✔ para mantener integridad, se validan todos los procesos por medio de funciones asincrònicas y de esta forma en caso de no encontrarse algun archivo o ruta se puede devolver errores

## 4.- Transaccionalidad ##
	- Proteger operaciones sensibles asegurando consistencia de datos. 
			✔ al igual que datos de usuario
	- Implementar una operación simulada que involucre al menos 2 acciones consecutivas (por ejemplo, registrar un usuario y crear su historial). 
			✔ operacionController.js tiene el método crearCompra con operacion que involucra 2 acciones consecutivas (registro de compra)
	- Asegurar rollback si alguna falla. 
			✔ operacionController.js Begin, commit y Rollback 
	- Log de éxito o error claro. 
			✔  fileLogger.js linea 7 
	- Evidencia de rollback si se fuerza un error. 
			✔ fileLogger.js linea 7
	- Tarea PLUS (opcional): 
		- Log en archivo de las transacciones fallidas (similar al log.txt previo). 
			✔  fileLogger.js registra con fecha en un archivo txt

## 5. Acceso a datos con ORM ## 
	- Reemplazar o complementar las consultas SQL con un ORM (como Sequelize). 
			✔ emisorService.js
	- Instalar e inicializar ORM. 
			✔ SI
	- Definir al menos 1 modelo (User). 
			✔ modelos de Emisor e Instrumento
	- Crear una ruta que devuelva los usuarios usando métodos del ORM. 
			✔ Si, emisorServise.js linea 5
	- Requerimientos mínimos: 
			- Comparación de resultados entre SQL manual y ORM. ✔ 
			- Justificación esperada: 
			- ¿Qué ventaja encontraste usando ORM frente al cliente SQL tradicional? 
				ORM siento que permite optimizar codigo SQL

## 6.- Manejo de relaciones en un ORM: ##
	- Crear relaciones entre modelos y consultarlas desde rutas. 
			✔ SI
	- Crear al menos 1 relación (por ejemplo, Usuario tiene muchos Pedidos). 
			✔ Relaciones Fondo-Operaciones / Emisor-Instrumentos etc.
	- Crear una ruta que devuelva el usuario y sus pedidos en una sola consulta. 
			✔ SI, método buscar en operacionController.js por ejemplo
	- Uso de include o equivalente para traer relaciones. 
			✔ SI
	- Al menos 2 modelos relacionados. 
			✔ tabla de emisores, precios, operaciones etc.

## 7.- Entregables: ##
	- Repositorio actualizado en GitHub 
		- Nuevos modelos y rutas. ✔
		- Carpeta models/, services/ o equivalente con acceso a datos. ✔
		- Código versionado y documentado. ✔
	- Subcarpeta nueva en Google Drive 
		- Carpeta: Parte 2 – Módulo 7 
		- Capturas de las operaciones de lectura, escritura y eliminación desde Postman o similar.

-------------------------------------------------------------------------------------------------------------------------------

# INFORMACIÓN LEGADO (MÓDULOS PREVIOS) # 

-------------------------------------------------------------------------------------------------------------------------------

# PARTE 4 - Objetivos de Examen Módulo 6 y cumplimiento # 

## 1.- Instalación y configuración de Node: ##
	- Instalar Node.js correctamente (mínimo versión 18).
		Version instalada: v24.13.1
	- Inicializar el proyecto con npm init y completar todos los campos relevantes del package.json. 
		packaje.json creado
	- Crear el archivo principal index.js o app.js, con una función que imprima "Servidor iniciado". 
		index.js Linea 76
	- El proyecto debe ejecutarse sin errores desde terminal usando node index.js. 
		ejecutado npm start y npm run dev, ambos funcionando en puerto 3000
	

## 2.- Gestión de paquetes en Node: ##
	- Instalar y declarar las siguientes dependencias: 
		- express (requerido): 			package.json ^5.2.1
		- dotenv (recomendado): 		package.json ^17.3.1
		- nodemon como devDependency: 	package.json ^3.1.14
	- Crear scripts personalizados en package.json:  
 		- npm start: 					Script start
		- npm run dev: 					Script Dev
	- Agregar comentarios para describir qué hace cada línea relevante: Listo
	- Los scripts deben ejecutarse correctamente: Script Funcionando
	- El README debe incluir instrucciones de instalación y ejecución: Implementado en Parte 1 

## 3.- Sirviendo contenido web ##
	- Crear al menos 2 rutas públicas( / y /status), cada una con respuestas en HTML o JSON. 
		En index.js; / Linea 49 direcciona a public y busca index.html, /api/status Linea 62 devuelve un res.json.
	- Configurar la carpeta /public para servir al menos 1 archivo estático. 
		carpeta public contiene html, js y una carpeta para css
	- Agregar middleware express.static() correctamente.
		linea 49 index.js, vincula carpeta public
	- Al menos una ruta debe devolver respuesta en JSON y otra en HTML. 
		/api/status linea 58 index.js, responde en res.json y linea 49 busca index.html porque apunta a raiz

##  4.- Persistencia en archivos planos ##
	- Crear un archivo log.txt y una función que registre en él cada visita a una ruta específica. 
		Implementado en src/utils/fileLogger.js
	- Usar fs.appendFile() para agregar líneas de texto. 
		Implementado en src/utils/fileLogger.js (línea 36)
	- Validar que el texto registrado tenga la siguiente estructura mínima: fecha, hora, ruta accedida. 
		Implementado en src/utils/fileLogger.js (línea 32)
	- El archivo debe registrar al menos 3 accesos simulados. 
		historial logs/log.txt 

## 5.- Ejecución de un aplicativo Node ##
	- Ejecutar la aplicación con npm run dev: listo
 	- Validar el acceso a las rutas creadas: ingresado mediante log
 	- Crear y completar el archivo README.md con: 
		- Requisitos del sistema: listo
 		- Instrucciones de instalación : listo
	- Subir el repositorio a GitHub con nombre claro y estructura organizada. 
		- El repositorio debe incluir al menos 5 carpetas bien nombradas (routes, controllers, middlewares, public, logs): Listo
		- definir en README si se decide una estructura distinta (por ejemplo, incluir /utils, /services, etc.): Implementada estructura de carpetas de Readme


## 6.- Entrega ##

	1.  Repositorio en GitHub 
		- Estructura clara del proyecto (carpetas, archivos fuente y README.md). 
		- Commit inicial y commits parciales que den cuenta del desarrollo. 
		- Scripts de ejecución funcionales: npm run dev, npm start
	2.  Carpeta en Google Drive compartida 
		- Nombre sugerido:   TP Integrador JS - [Tu Nombre y Apellido]: Listo
		- Subcarpeta para la Parte 1: Parte 1 – Módulo 6 o Contenidosmínimos:   
			- Capturas de pantalla del servidor en funcionamiento: Listo
			- Capturas del uso de rutas (/, /status) y archivos planos (log.txt): Listo 
 			- Documento breve con reflexiones técnicas (puede ser parte del README o un archivo .md/.pdf por separado): Listo

-------------------------------------------------------------------------------------------------------------------------------

# Reflexiones Técnicas Módulo 6 (LEGADO)# 

	- Organización de Arbol: Permite no perderse entre todo el código si se entiende la lógica.
	- Bootstrap implementado: Permite diseño agradable y sencillo de entender de html.
	- Log diario con fecha: Permite revisar el codigo de forma mas ordenada en caso de errores y evidenciar todas las acciones realizadas.
	- .env Permite cambiar valores sin tocar el codigo como el puerto.