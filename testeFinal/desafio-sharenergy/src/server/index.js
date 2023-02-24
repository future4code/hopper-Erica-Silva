const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createConnection({
    host:"35.226.146.116",
    user:"4313885-erica-silva",
    password:"erica-silva2022",
    database:"Hopper-4313885-erica-silva"
})

app.use(cors())
app.use(express.json())

app.post('/cadastro', (req,res) =>{
   
    const {nome, email, fone, cpf} = req.body
    console.log(nome)

let SQL = "INSERT INTO crud ( nome, email, fone, cpf) VALUES (?, ?, ?, ?);";

db.query(SQL,[nome,email,fone,cpf],(err, result) =>{
    console.log(err)
})
res.status(201).send()
})

app.get('/getCadastro',(req,res)=>{
    let SQL = "SELECT * from crud"

    db.query(SQL,(err,result)=>{
        if(err) console.log(err)
        else res.send(result)
    })
   
})

app.put('/editar',(req,res)=>{
    const {id, nome, email, fone, cpf} = req.body
    console.log(nome)

    let SQL = "UPDATE crud SET nome = ?, email = ?, fone = ?, cpf = ? WHERE id = ?;";

    db.query(SQL,[nome,email,fone,cpf,id],(err, result) => {
        console.log(err)
    })
    res.status(200).send() 
})

app.delete('/excluir/:id', (req, res) =>{
    const {id} = req.params
    console.log(id)

    let SQL = "DELETE FROM crud WHERE id = ?;";

    db.query(SQL,[id],(err, result) => {
        console.log(err)
    })
      
    res.status(204).send()
})

app.listen(3001, ()=>{
    console.log("servidor rodando")
})