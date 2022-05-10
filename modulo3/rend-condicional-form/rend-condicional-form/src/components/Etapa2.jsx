import React from "react";

export default class Etapa2 extends React.Component{
    render(){
        return(
           <div>
               <h2>Informações de Ensino Superior</h2>
               <p>5.Qual curso?</p> 
               <input></input>         
               
               <p>6.Qual a unidade de ensino?</p> 
               <select>
                   <option value="vazia"></option>
                   <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                   <option value="Ensino médio completo">Ensino médio completo</option>
                   <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                   <option value="Ensino superior completo">Ensino superior completo</option>
               </select>

               
           </div>

        );
    }
}