import { CustomError } from "../error/customError";
import { recipe } from "../model/recipe";
import { InfoUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public infoUser = async (user: InfoUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.email})
        .where({ id: user.id })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Auth_users")
      .select().where({email})

     return result[0]
        
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public insertRecipe = async (recipe: recipe) => {
    try {
      await UserDatabase.connection
        .insert({
          
          title: recipe.title,
          description: recipe.description,
          date: recipe.date,
        })
        .into("Auth_recipe");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

}
