import { Request, Response } from "express"
import { buy } from "./types"




export const getBuy = (req: Request, res: Response) => {
    let codeError = 400

    try {

        const result = req.params.user_id

        res.status(200).send(result[0])

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }

}
