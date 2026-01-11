const express = require("express");
const router = express.Router();
const {mostrarTemas} = require("../controladores/temascontroladores");

//mostrar los temas
router.get("/", mostrarTemas);

module.exports = router;
