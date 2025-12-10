const express = require("express");
const router = express.Router();
const { mostrarTemas, crearTema, votarTema, eliminarTema } = 
require("../controladores/temascontroladores");

// GET → mostrar todos los temas
router.get("/", mostrarTemas);

// POST → crear tema
router.post("/crear", crearTema);

// PUT → actualizar
router.put("/votar/:id", votarTema);

// DELETE → 
router.delete("/borrar/:id", eliminarTema);

module.exports = router;    