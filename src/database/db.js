// Importar a depedência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//Utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
    // Com comandos SQL:
    // 1. Criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // // 2. Inserir dados na table
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "https://picsum.photos/276/150",
    //     "papersider",
    //     "Rua Guilherme",
    //     "Número 2",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    // 3. Consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Esses são os registros disponíveis: ")
    //     console.log(rows)
    // })

    // 4. Deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [6], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Dados deletados com sucesso!")
    // })

    // 3. Consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Esses são os registros disponíveis: ")
    //     console.log(rows)
    //     })
})