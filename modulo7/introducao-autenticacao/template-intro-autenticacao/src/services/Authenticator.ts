import { AuthenticationData } from "../model/user"
import * as jwt from "jsonwebtoken"
import { Unauthorazed } from "../error/customError"


export class Authenticator {
    public generateToken = ({ id }: AuthenticationData): string => {

        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "30min" }
        )
        return token

    }

    getTokenData = (token: string):AuthenticationData => {

        try {
            const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
            return payload
            
        } catch (error:any) {
            console.log(error.message)
            throw new Unauthorazed();
            
            
        }
       
    }
}