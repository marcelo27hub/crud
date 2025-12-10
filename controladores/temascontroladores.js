// Array temporal de temas
let temas = [
  { id: 1, titulo: "Cómo programar como un ninja", votos: 0 },
  { id: 2, titulo: "Dominar el arte de preparar café", votos: 0 },
];

// Mostrar todos los temas
function mostrarTemas(req, res) {
  res.render("temas", { temas });
}

// Crear tema
function crearTema(req, res) {
  const nuevoTitulo = req.body.titulo;
  const nuevoTema = {
    id: temas.length ? temas[temas.length - 1].id + 1 : 1,
    titulo: nuevoTitulo,
    votos: 0
  };
  temas.push(nuevoTema);
  res.json({ success: true, tema: nuevoTema });
}

// Votar tema
function votarTema(req, res) {
  const id = parseInt(req.params.id);
  const tema = temas.find(t => t.id === id);
  if(tema) {
    tema.votos++;
    res.json({ success: true, votos: tema.votos });
  } else {
    res.json({ success: false });
  }
}

// Borrar tema
function eliminarTema(req, res) {
  const id = parseInt(req.params.id);
  const index = temas.findIndex(t => t.id === id);
  if(index !== -1) {
    temas.splice(index, 1);
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
}

module.exports = { mostrarTemas, crearTema, votarTema, eliminarTema };
