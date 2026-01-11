// arrays temporales
let temas = [
    { id: 1, titulo: "Marcas de computadoras", votos: 0, enlace: [] },
    { id: 2, titulo: "tienda de notebooks", votos: 0, enlace: [] }
];

// mostrar los temas
function mostrarTemas(req, res){
    const ordenados = [...temas].sort((a, b) => b.votos - a.votos);
    res.render("temas", {temas: ordenados});
}

// nuevos temas
function crearTemas(req, res){
    const nuevoTitulo = req.body.titulo;
    const nuevoTema = {
        id: temas.length ? temas[temas.length -1].id +1 : 1,
        titulo: nuevoTitulo,
        votos: 0,
        enlace: []
    };
    temas.push(nuevoTema);
    res.json({success: true, tema: nuevoTema});
}

// votar temas
function votarTemas(req, res){
    const id = parseInt(req.params.id);
    const tema = temas.find(t => t.id === id);
    if (tema){
        tema.votos++; // <-- corregido de temass a tema
        res.json({success: true, votos: tema.votos});
    } else{
        res.json({success: false});
    }
}

module.exports = {temas, mostrarTemas, crearTemas, votarTemas};
