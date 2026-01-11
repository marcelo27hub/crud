const express = require("express");
const router = express.Router();
const {mostrarTemas, crearTemas, votarTemas} = require("../controladores/temascontroladores");

//mostrar los temas
router.get("/", mostrarTemas);

//crear temas
router.post("/crear", crearTemas);

//votar temas
router.put("/votar", votarTemas);


module.exports = router;
