//prepaaramos el servidor
const express = require("express");
const app = express();
const PORT = 3000;


//middleware para leer datos de formularios y html
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//usar ejs como motor de plantillas
app.set("view engine", "ejs");

//carpetas de archivos publicos
app.use(express.static("public"));

//ruta principal 
app.get("/", (req, res) =>{
    res.send("servidor exxpress corriendo!");
});


//importar rutas de temasrutas
const temasrutas = require("./rutas/temasrutas");
app.use("/temas", temasrutas);

//iniciar servidor
app.listen(PORT, () => console.log(`servidor activo en http://localhost:${PORT}`));