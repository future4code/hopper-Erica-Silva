export type user = {
   id: string
   email: string
   password: string
   name: string
   
}


export interface UserInputDTO {
   name: string,
   email: string,
   password: string
}

export interface LoginInputDTO {
   
   email: string,
   password: string
}

export interface InfoUserInputDTO {
   email: string,
   token: string
}

export interface InfoUserInput {
   email: string,
   id: string
}

export type AuthenticationData = {
   id:string
}