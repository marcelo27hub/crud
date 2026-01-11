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

//borrar tema
function eliminarTemas(req, res){
    const id = parseInt(req.params.id);
    const index = temas.findIndex( t => t.id === id);
    if (index !== -1){
        temas.splice(index, 1);
        res.json({success: true});
    } else {
        res.json({success: false});
    }
}

//crear enlaces
function crearEnlace(req, res) {
    const tema = temas.find(t => t.id == req.params.id);
    if (!tema) return res.json({ success: false });

    const nuevoEnlace = {
    id: tema.enlaces.length ? tema.enlaces.at(-1).id + 1 : 1,
    url: req.body.url,
    votos: 0
    };

    tema.enlaces.push(nuevoEnlace);
    res.json({ success: true, enlace: nuevoEnlace });
}
module.exports = {temas, mostrarTemas, crearTemas, votarTemas, eliminarTemas, crearEnlace};
