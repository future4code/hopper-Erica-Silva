import connection from "./connection";

const users = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS Usuario (
            id BIGINT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            nickname VARCHAR(200) NOT NULL,
            email VARCHAR(100) NOT NULL);
        `)

        console.log("Usuario criada com sucesso.")
    } catch (error:any) {
        console.log("Erro ao criar usuario.")
        console.log(error.sqlMessage)
    }
}

async function criarUsers() {
    try {
        await connection.raw(`
            INSERT INTO Usuario(id, name, nickname, email)
            VALUES 
            (1, "Erica", "Erica", "erica@gmail.com"),
            (2, "Ellen", "Ellen", "ellen@gmail.com"),
            (3, "Irvina", "Irvina", "irvina@gmail.com"),
            (4, "Thomas", "Thomas", "thomas@gmail.com"),
            (5, "Eduardo", "Edu", "eduardo@gmail.com");
        `)
        
        console.log("Usuario criados com sucesso.")
    } catch (error:any) {
        console.log("Erro ao criar usuario.")
        console.log(error.sqlMessage)
    }
}

 users()
.then(() => criarUsers())
.finally(() => process.exit())