import React from "react";

export default class Etapa3 extends React.Component{
    render(){
        return(
           <div>
               <h2>Informações Gerais de Ensino</h2>
               <p>5.Por que você não terminou um curso de graduação?</p> 
               <input></input>   

               <p>6.Você fez algum curso complementar?</p> 
               <select>
                   <option></option>
                   <option value="Nenhum">Nenhum</option>
                   <option value="Ensino técnico">Ensino técnico</option>
                   <option value="Cursos extracurriculares">Cursos extracurriculares</option>
               </select>

                    
              
           </div>

        );
    }
}