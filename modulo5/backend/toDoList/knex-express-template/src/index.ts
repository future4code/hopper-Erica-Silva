import express,{Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { User } from "./types";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());


app.post("/user", async (req:Request, res:Response) =>{
  let errorCode = 400

  try {
    const {name, nickname, email} = req.body

    if(!name || !nickname || !email){
      throw new Error("Preencha todas as informações corretamente!");
      
    }

    const novoUsuario: User = {
      id: Math.random(),
      name:name,
      nickname:nickname,
      email:email
    }

    await connection.raw(`

    
    INSERT INTO User(id, name, nickname, email)

    VALUES(
      ${novoUsuario.id},
      "${novoUsuario.name}", 
      "${novoUsuario.nickname}", 
      "${novoUsuario.email}")
    
      SELECT * FROM User
    `);
    res.status(200).send("Usuário criado com sucesso!")
    
  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }

})

app.get("/user/:id", async (req:Request, res:Response)=>{
  let errorCode = 400

  try {

    const buscarUsuario = req.params.buscarUsuario

    if(buscarUsuario){
      const pegarUsuario = await connection.raw(`
      SELECT * FROM User
      WHERE id = "${buscarUsuario}"
      `)
    }


    const pegarUsuario = await connection.raw(`
    SELECT * FROM User

    `)
    res.status(200).send(pegarUsuario[0])
    
  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }
})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app