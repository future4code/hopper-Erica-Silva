import { Request, Response } from "express"
import { connection } from "./data/connection"
import { labecommerce_products, products } from "./types"



export const postAllProducts = async (req: Request, res: Response): Promise<void> => {
    let codeError = 400

    try {
        const createProducts = req.headers.authorization

        if (!createProducts) {
            res.status(401).end
        }

        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            throw new Error("Consulte se todos os campos estãp preenchidos corretamente");

        }


        await connection("labecommerce_products")
            .insert({
                id: Math.floor(Math.random() * 10 + 1),
                name: name,
                price: price,
                image_url: image_url
            })


        
        res.status(200).send({ message: "Produto cadastrado com sucesso", products })

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }

}