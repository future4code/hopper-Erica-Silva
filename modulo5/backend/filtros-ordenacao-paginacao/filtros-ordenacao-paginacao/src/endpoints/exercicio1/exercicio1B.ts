import { Request, Response } from "express"
import { connection } from "../../data/connection"



export const getAllType = async(req: Request,res: Response): Promise<void> =>{
    try {
      let type = req.params.type as string
       const types = await connection("aula48_exercicio")
       .where("type","like",`%${type}%`)
 
       if(!types.length){
          res.statusCode = 404
          throw new Error("Tipo não encontrado")
       }
 
       res.status(200).send(types)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }