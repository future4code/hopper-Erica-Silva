import connection from "./connection";

const toDoList = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS toDoList (
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            nickname DECIMAL(8, 2) NOT NULL,
            email VARCHAR(100) NOT NULL
        `)

        console.log("Usuario criada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao criar usuario.")
        console.log(error.sqlMessage)
    }
}

async function criarTabela() {
    try {
        await connection.raw(`
            INSERT INTO toDoList (id, name, nickname, email)
            VALUES 
            (1, "Erica", Erica, "erica@gmail.com"),
            (2, "Ellen", Ellen, "ellen@gmail.com"),
            (3, "Irvina", Irvina, "irvina@gmail.com"),
            (4, "Thomas", Thomas, "thomas@gmail.com"),
            (5, "Eduardo", Edu, "eduardo@gmail.com");
        `)
        
        console.log("Usuarios criados com sucesso.")
    } catch (error:any) {
        console.log("Erro ao criar usuarios.")
        console.log(error.sqlMessage)
    }
}

toDoList()
.then(() => criarTabela())
.finally(() => process.exit())