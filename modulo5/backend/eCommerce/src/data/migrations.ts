import { connection } from "./connection"
import users from "./users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
   CREATE TABLE labecommerce_users(
      id INT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL)
      `)

      const createTablesProducts = () => connection
      .raw(`
      CREATE TABLE labecommerce_products(
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         price INT NOT NULL,
         image_url VARCHAR(1000) NOT NULL)
         `)
     const createTablesRegistros = () => connection
         .raw(`
         CREATE TABLE labecommerce_purchases(
            id VARCHAR(100) PRIMARY KEY,
            user_id INT NOT NULL,
            products_id INT NOT NULL,
            quantity INT NOT NULL,
            total_price INT NOT NULL,

            FOREIGN KEY (user_id) REFERENCES labecommerce_users(id),
            FOREIGN KEY (products_id) REFERENCES labecommerce_products(id)
            )

            `)

         const createUser = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS aula_webservices_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         nickname VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         address VARCHAR(255) NOT NULL
      );
   `)
   
const insertUsers = () => connection("aula_webservices_users")
.insert(users)
.then(() => { console.log("Usuários criados") })
.catch(printError)

   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

   .then(() => { console.log("Tabela produtos criadas") })
   .catch(printError)


const closeConnection = () => { connection.destroy() }

createTables()
createTablesProducts()
createTablesRegistros()
createUser()

    .then(insertUsers)
   .finally(closeConnection)