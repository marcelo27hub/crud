const express = require("express");
const app = express();
const PORT = 3000;

// Middleware para leer datos de formularios y JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar EJS como motor de plantillas
app.set("view engine", "ejs");

// Carpeta de archivos públicos (CSS/JS)
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor Express corriendo!");
});

// Importar rutas de temas
const temasrutas = require("./rutas/temasrutas");
app.use("/temas", temasrutas);

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
