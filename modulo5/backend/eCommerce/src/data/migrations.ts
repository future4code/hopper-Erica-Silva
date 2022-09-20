import { connection } from "./connection"

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
         price INT,
         image_url VARCHAR(1000) NOT NULL)
         `)
     const createTablesRegistros = () => connection
         .raw(`
         CREATE TABLE labecommerce_purchases(
            id INT PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            products_id VARCHAR(1000) NOT NULL,
            quantity INT NOT NULL,
            total_price INT NOT NULL)
            `)

   .then(() => { console.log("Tabela produtos criadas") })
   .catch(printError)


const closeConnection = () => { connection.destroy() }

createTables()
createTablesProducts()
createTablesRegistros()

   .finally(closeConnection)