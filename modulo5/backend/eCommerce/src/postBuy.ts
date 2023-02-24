import { Request, Response } from "express"
import { labecommerce_purchases, buy, products } from "./types"
import { connection } from "./data/connection"


export const postBuy = async (req: Request, res: Response): Promise<void> => {
    let codeError = 400

    try {

        const buyProducts = req.headers.authorization

        if (!buyProducts) {
            res.status(401).end
        }

        const {user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            throw new Error("Consulte se todos os campos estão preenchidos corretamente");

        }
        
       const price = await connection.raw(`
        SELECT price * FROM labecommerce_products
        WHERE id = ${product_id}
       
      
        `)

        const idProduct = await connection.raw(`
        SELECT product_id * FROM labecommerce_purchases
        JOIN labecommerce_products ON product_id = labecommerce_products.id,
        `)

        const idUser = await connection.raw(`
        SELECT user_id * FROM labecommerce_purchases
        JOIN labecommerce_users ON user_id = labecommerce_users.id
        `)

        await connection("labecommerce_purchases")
            .insert({
                id:Math.floor(Math.random() * 10 + 1),
                user_id:idUser,
                product_id:idProduct,
                quantity,
                total_price: (quantity * price)
            })

      
        res.status(200).send({ message: "Produto comprado com sucesso", buy })

    } catch (error: any) {
        res.status(codeError).send(error.message)
    }

}