import React from "react";
import axios from "axios";

class IntegraçaoApi extends React.Component{

    state = {
        lista:[]
    }

    componentDidMount(){
        this.pegarLista()
    }

     pegarLista = () =>{
         axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
         ,{headers:{
             Authorization:"erica-lima-hopper"
         }
        })
        .then((response)=>{
           console.log("Sucesso",response.data.result.list)
           this.setState({lista: response.data.result.list})
        })
        .catch((error)=>{
           console.log("Erro",error.response.data)
        })
     }

    render(){
    
        const listas = this.state.lista.map((cadaNome) =>{
            return <h3>{cadaNome.name}</h3>
        })

    return(
        <div>
            {listas}
        </div>
    )
}

}

export default IntegraçaoApi