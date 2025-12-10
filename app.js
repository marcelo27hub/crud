const express = require("express");
const app =  express();
const puerto = 3000;

// Middleware para leer datos de formularios y JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");

// Carpeta de archivos públicos (CSS/JS)
app.use(express.static("publico"))

//ruta principal
app.get("/", (req, res) => {
    res.send(" servidor Express corriendo!");
});

//importar rutas de temas
const temasrutas = require("//rutas/temasrutas");
app.use("/temas", temasrutas);

//iniciar servidor
app.listem(puerto, () => console.log(`Servidor en http://localhost:${puerto}`));
