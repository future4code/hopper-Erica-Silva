import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "../img/home.png"

function TelaListaMatch(props){

  const[mostrarMatch,setMostrarMatch] = useState([])

       function matches(){
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erica/matches")
        .then((response)=>{
            console.log(response.data.matches)
            setMostrarMatch(response.data.matches)
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    useEffect(()=>{
        matches()  
      },[]) 

    return(
        <div className="tela">


        <div className="headerLista">

        <img className="voltar" onClick={props.trocar} src={Home}></img>    
        <h2>Meus Matches</h2>
        
        </div>

        {mostrarMatch.map((matches,id)=>{
            return(
                <ul key={id}>
                    
                        <li>
                        <div>
                        <img className="pretendenteLista" src={matches.photo}></img>
                        </div>
                        <p>
                        {matches.name}
                        </p>
                       
                    </li>
                </ul>
            )
         
        })}
        
        

         
        </div>
    )
    
   
           
        
    
  

}




export default TelaListaMatch