import { products } from "./types"
import {Request,Response } from "express"

export const getAllProducts= (req: Request, res: Response) => {
    let codeError = 400

    try {


        res.status(200).send(products)

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }

}
