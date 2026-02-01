 //importamos la libreria para nuestra base de datos 
const sqlite3 = require("sqlite3").verbose(); 


// creamos una archivo donde estara la base de datos 
const db = new sqlite3.Database("./database.db");


 //ejecutamos las consultas 
db.serialize(()=>{ 
    db.run(`
        CREATE TABLE IF NOT EXISTS temas( 
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            titulo TEXT NOT NULL, 
            votos INTEGER DEFAULT 0 
        )`
    ); 
        db.run(` CREATE TABLE IF NOT EXISTS enlaces( 
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tema_id INTEGER,
            url TEXT NOT NULL,
            votos INTEGER DEFAULT 0,
            FOREIGN KEY (tema_id) REFERENCES temas(id) 
        )`
    );
}); 


module.exports = db;