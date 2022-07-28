import React,{useEffect, useState} from "react";
import axios from "axios";
import Matches from '../img/matches.png'


function TelaInicial(props) {

    const [pretendentes, setPretendentes] = useState({})
    const [match, setMatch] = useState(null)

    useEffect(() => {
        mudarPretendentes()
    }, [])

    function mudarPretendentes() {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erica/person")
            .then((response) => {
                console.log("response",response.data)
                setPretendentes(response.data.profile)

            })
    }
    

    function escolherPretendentes(id) {
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erica/choose-person", {
            id: id,
            choice: true

        }).then((response) => {
            setMatch(response.data.profile)

        })
    }

    function darMatch(id) {
        mudarPretendentes()
        escolherPretendentes(id)

    }

    function limparMatch(){
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/erica/clear")
        .then((response)=>{
         setPretendentes(response.data.profile) 
        })
        .catch((error)=>{
            console.log(error.response)
        })
    
      }
   
  
    return (

        <div className="tela">
            <div className="header">
            <button className = "limparDados" onClick={() => limparMatch()}><h2>AstroMatch</h2></button>
            
            <img className = "matches"onClick={props.trocar} src = {Matches}></img>
            
            </div>

            <div className="container">


            <img className="pretendenteApp" src={pretendentes.photo}></img><br />
            {pretendentes.name},
            {pretendentes.age} <br />
            {pretendentes.bio} <br />

            </div>

            <div className="footer">

            <button className="deslike" onClick={() => mudarPretendentes()}>X</button>
            <button className="like" onClick={() => darMatch(pretendentes.id)}>♥</button>
            </div>

           

        </div>
    )

}
export default TelaInicial;

