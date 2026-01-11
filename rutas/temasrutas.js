const express = require("express");
const router = express.Router();
const {mostrarTemas, crearTemas, votarTemas, eliminarTemas, crearEnlace, votarEnlace} = require("../controladores/temascontroladores");

//mostrar los temas
router.get("/", mostrarTemas);

//crear temas

router.post("/crear", crearTemas);

//votar temas
router.put("/votar/:id", votarTemas);

//eliminar tema
router.delete("/borrar/:id", eliminarTemas);

//crear enlace, votar enlace, eliminar enlace
router.post("/:id/enlaces", crearEnlace);
router.put("/id/enlaces/:enlaceId/votar", votarEnlace);

module.exports = router;
