import React from "react";
import axios from "axios";

class TelaLista extends React.Component{


    state = {
        usuarios:[]
    }

    componentDidMount(){
        this.guardarCadastro()
    }

    guardarCadastro = async() => {
    //   axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{headers:{
    //     Authorization: "erica-lima-hopper"
    //   }
    // })
    // .then((response) =>{
       
    //     this.setState({usuarios: response.data})
    // })
    // .catch((error) =>{
    //    this.setState({usuarios: error.response})
    // })
    try{
    const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{headers:{
            Authorization: "erica-lima-hopper"
          }
     })
     this.setState({usuarios: response.data})
    }

     catch(error){

     }
    }

    deletarCadastro = async (id) => {
    //   axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {headers:{
    //     Authorization: "erica-lima-hopper"  
    //   }})
    //   .then(() => {
    //       alert("Cadastro deletado com sucesso")
    //       this.guardarCadastro()
    //   })
    //   .catch(() => {
    //     alert("Tente novamente")
    //   })
    try{
      await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {headers:{
        Authorization: "erica-lima-hopper"  
         }})
         alert("Cadastro deletado com sucesso")
         this.guardarCadastro()
    }
    catch(error){

    }
    }

render(){
return(

    <div>
        
        <h2>Tela lista</h2>
        <button onClick={this.props.troca}>Trocar de Tela</button>
        {
            this.state.usuarios.map((usuario)=>{
                return(
                    <ul>
                        <li>{usuario.name}</li>
                        <button onClick={() => this.deletarCadastro(usuario.id)}>Deletar</button>
                    </ul>
                )
            })


        }
    
    </div>


)

}



}



export default TelaLista 