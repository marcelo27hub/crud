const express = require("express");
const Router = express.Router();
const {mostrarTemas} = require("./controladores/temascontroladores");

//mostrar los temas
Router.get("/", mostrarTemas);

module.exports = Router;
