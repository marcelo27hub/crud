const db = require("../db/db")

//obtener temas y enlaces ordenados por votos

function obtenerTemas(callback) {
    db.all("SELECT * FROM temas ORDER BY votos DESC", (error, temas) => {
        if (error) return callback(error);
        if (temas.length === 0) return callback(null, []);

        let pendientes = temas.length;

        temas.forEach(t => {
            db.all(
                "SELECT * FROM enlaces WHERE tema_id = ? ORDER BY votos DESC",
                [t.id],
                (error, enlaces) => {
                    t.enlaces = enlaces || [];
                    pendientes--;
                    if (pendientes === 0) callback(null, temas);
                }
            );
        });
    });
}

//las funciones las cuales actua4ran para la base de datos

function crearTema(titulo){
    db.run("INSERT INTO temas (titulo) VALUES (?)", [titulo]);

}


function votarTema(id) {
    db.run("UPDATE temas SET votos = votos + 1 WHERE id = ?", [id]);
}

function borrarTema(id) {
    db.run("DELETE FROM temas WHERE id = ?", [id]);
    db.run("DELETE FROM enlaces WHERE tema_id = ?", [id]);
}

function actualizarTema(id, titulo){
    db.run("UPDATE temas SET titulo = ? WHERE id = ? ", 
        [titulo, id]
    );
}

function crearEnlace(temaId, url) {
    db.run(
    "INSERT INTO enlaces (tema_id, url) VALUES (?, ?)",
    [temaId, url]
    );
}

function votarEnlace(enlaceId) {
    db.run(
    "UPDATE enlaces SET votos = votos + 1 WHERE id = ?",
    [enlaceId]
    );
}

function borrarEnlace(enlaceId) {
    db.run("DELETE FROM enlaces WHERE id = ?", [enlaceId]);
}



function actualizarEnlace(enladeId, url){
    db.run(
        "UPDATE enlaces SET url = ? WHERE id = ?",
    [url, enladeId]
    );
}


module.exports = {
    obtenerTemas,
    crearTema,
    votarTema,
    borrarTema,
    actualizarTema,
    crearEnlace,
    votarEnlace,
    borrarEnlace,
    actualizarEnlace
};