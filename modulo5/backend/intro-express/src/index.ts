import express, {Request,Response} from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())


app.get("/", (request:Request, response:Response) => {
    const id = request.params
    const name = request.body
    const phone = request.body
    const email = request.body
    const website = request.headers


  response.send("deu bom")
  console.log(id,name,phone,email,website);
  
  
})




app.listen(3003,()=>{
    console.log("Server running in http://localhost:3003")
})