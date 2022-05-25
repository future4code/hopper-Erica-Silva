import React from "react";
import axios from "axios";

class TelaCadastro extends React.Component{

state = {
    nome:"",
    email:""
}

valorNome = (event) =>{
    this.setState({nome: event.target.value})
}
valorEmail = (event) =>{
    this.setState({email: event.target.value})
}

cadastrar = async() => {
  
    const body ={
        "name": this.state.nome,
        "email": this.state.email
    }

//   axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,
//    {headers:{Authorization: "erica-lima-hopper"

//    }
//   }) 
//   .then(()=>{
//       alert("Usuario cadastrado com sucesso")
//       this.setState({nome:"", email:""})
//   })
//   .catch((error)=>{
//       alert("Email já cadastrado")
//       this.setState({nome:"", email:""})
//   }) 

// com try/catch e async/wait

try {
 await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,
  {headers:{Authorization: "erica-lima-hopper"
 
}
 
})
alert("Email cadastrado com sucesso")
}
catch(error){
    alert("Email já cadastrado")
}

}

 render(){
     return(
         <div>
          <h2>Tela Cadastro</h2>
          
          <button onClick={this.props.troca}>Trocar de Tela</button>

          <input placeholder="nome" value={this.state.nome} onChange={this.valorNome}></input>
          <input placeholder="email" value={this.state.email} onChange={this.valorEmail}></input>
          
          <button onClick={this.cadastrar}>Criar Usuario</button>
         
         </div>
     )
 }
}



export default TelaCadastro