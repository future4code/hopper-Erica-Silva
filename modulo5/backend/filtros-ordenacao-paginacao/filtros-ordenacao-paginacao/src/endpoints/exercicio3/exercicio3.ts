import { Request, Response } from "express"
import { connection } from "../../data/connection"


export const getLimitUser = async(req: Request,res: Response): Promise<void> =>{
    try {
        let id = req.query.id as string
        let sort = req.query.sort as string
        let order = req.query.order as string

        if(!id){
            id = "%"
        }

       const ids = await connection("aula48_exercicio")
       .where("id","like",`%${id}%`)
       .orderBy(sort, order)
       .limit(5)
       .offset(10)
 
       if(!ids.length){
          res.statusCode = 404
          throw new Error("Nao confere")
       }
 
       res.status(200).send(ids)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }