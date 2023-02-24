import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { users, Users } from './data';



const app: Express = express();

app.use(express.json());
app.use(cors());

//CADASTRAR USUARIO

app.post("/users",(req:Request, res:Response)=>{
   let errorCode = 400
 
   
   try{
     const {name,cpf,birthday,balance,extract} = req.body
    if(!name || !cpf || !birthday){
      errorCode = 422
      throw new Error("Preencha as informações corretamente");
      
    }

    const date = new Date()
    const formatedDate = Number(date.getDate() + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear()))
    const birthDate = Number(birthday) 
    const age = (formatedDate - birthDate)

    console.log(formatedDate)

    if(age < 18){
      errorCode = 403
      throw new Error("Idade inferior a 18 anos");
      
    }
    
    const user = users.find((c) =>{
      return c.cpf === cpf
    })
    if(user){
      errorCode = 409
      throw new Error("CPF já cadastrado");
      
    }
    
    const newUser: Users = {
      id:Math.random(),
      name:name,
      cpf:cpf,
      birthday:birthday,
      balance:balance,
      extract:extract

    }
    users.push(newUser)
    res.status(errorCode).send({message: "Usuário criado com sucesso", users})
     
   }catch(error:any){
    res.status(errorCode).send(error.message)
   }
})

//PEGAR SALDO USUARIO

app.get("/users/saldo",(req:Request, res:Response)=>{
   let errorCode = 400


   try{
      const {name,cpf} = req.body 
   }
   catch{}
   
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});