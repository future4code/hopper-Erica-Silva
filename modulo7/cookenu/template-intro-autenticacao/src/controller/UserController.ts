import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { RecipeInputDTO } from "../model/recipe";
import { InfoUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, email, password } = req.body;
    
          const input: UserInputDTO = {
            name,
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.signup(input);
    
          res.status(201).send({ message: "Usuário criado!" , token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input);
    
          res.status(201).send({ token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public infoUser = async (req: Request, res: Response) => {
        try {
          
          const input: InfoUserInputDTO = {
           email: req.body.email,
            token: req.headers.authorization as string
          };

          const userBusiness = new UserBusiness()
          userBusiness.infoUser(input);
    
          res.status(201).send({ message: "Perfil visualizado" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public recipe = async (req: Request, res: Response) => {
        try {
          const { title, description, date } = req.body;
    
          const input: RecipeInputDTO = {
            title,
            description,
            date,
          };
          const userBusiness = new UserBusiness()
          const token = await userBusiness.recipe(input);
    
          res.status(201).send({ message: "Receita criada com sucesso!" , token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 



}
