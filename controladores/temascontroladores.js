// arrays temporales
let temas = [
    { id: 1, titulo: "Marcas de computadoras", votos: 0, enlace: [] },
    { id: 2, titulo: "tienda de notebooks", votos: 0, enlace: [] }
];

//mostrar los temas
function mostrarTemas (req, res){
    const ordenados = [...temas].sort((a, b) => b.votos - a.votos);
    res.render("/temas", {temas: ordenados});
}

module.exports = {temas, mostrarTemas}
