const express = require("express");
const router = express.Router();
const {mostrarTemas, crearTemas, votarTemas, eliminarTemas} = require("../controladores/temascontroladores");

//mostrar los temas
router.get("/", mostrarTemas);

//crear temas

router.post("/crear", crearTemas);

//votar temas
router.put("/votar/:id", votarTemas);

router.delete("/borrar/:id", eliminarTemas)

module.exports = router;
