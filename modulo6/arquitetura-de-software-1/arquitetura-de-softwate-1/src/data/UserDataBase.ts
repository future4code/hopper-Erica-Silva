import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/type";


export class UserDataBase extends BaseDatabase{
   public insertUser = async (User:User) => {
    await UserDataBase.connection.insert({
        id:User.id,
        name:User.name,
        email:User.email,
        password:User.password
    }).into ("User_Arq")
   } 


}

export class get extends BaseDatabase{ 
    public get = async (user:User[]) => {

    try {

        const users: User[] = [];

        const result = await BaseDatabase.connection
            .select("*")
            .from("User_Arq");

                    for(let user of result){
                            users.push(user);
                    }

        return users;

    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
}
}