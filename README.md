# Cómo ejecutar en un ambiente local

### Acceda al archivo `deploy.js`
Asegúrese de que su contenido es únicamente:
```javascript
module.exports  =  false;
```
### Acceda al archivo `src/dev.js`

Reemplace su contenido con:
```javascript
module.exports = {
	apiurl : "API URL",
	s3url : "BUCKET URL"
}
```
Donde:
* `API URL` es la URL de accesso de su API. Por defecto, visual studio utiliza `http://localhost:54403`, pero asegúrese de que sea su caso.
* `BUCKET URL` es la URL de acceso de su bucket de AWS S3. Tiene el formato `https://[nombre del bucket].s3.amazonaws.com`.

### Ejecute el proyecto de forma local.
Ejecute el comando `ng serve` para iniciar un servidor local. El sitio web estará disponible en `http://localhost:4200/`. 
