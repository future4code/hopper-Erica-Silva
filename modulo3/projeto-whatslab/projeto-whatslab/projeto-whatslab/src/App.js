import styled from 'styled-components'
import React from 'react'
// import './App.css'


const MainContainer = styled.div`
display:flex;
flex-direction:column;
background-color:gray;
height:98vh;
width:45vw;
border-radius:2%;
border-style:double;
border-color:purple;
margin:auto;
margin-top:5px;

`
const Campo = styled.div`
display:flex;
flex-direction:column;
flex: 1 1 0%;
justify-content:flex-end;
background-color:lightblue;
height:96vh;
margin-bottom:5px;
padding-left:10px;
border-radius:2% 2% 0 0;
border-bottom:2px solid;
border-color:purple;

`

const Buttom = styled.button`
background-color:slategray;
border-color:orchid;

` 
const InputUsuario = styled.input`
width:10vw;
margin-left:10px;
padding-right:5px;
margin-bottom:5px;

`
const InputMensagem = styled.input`
width:25vw;
margin-left:5px;
`


class App extends React.Component{

  
 state = {

  mensagem: [
    {
    nomeUsuario:"",
    mensagemUsuario:""
    }
  ],

  valorInputUsuario:"",
  valorInputMensagem:""
  
 };

 adicionaMensagem = () => {
  const novaMensagem = {
     nomeUsuario:this.state.valorInputUsuario,
     mensagemUsuario:this.state.valorInputMensagem
  };

  const novasMensagens = [...this.state.mensagem,novaMensagem]

  this.setState({mensagem: novasMensagens,valorInputMensagem:""})

 };
  
 onChangeNomeUsuario = (event) => {
  this.setState({valorInputUsuario:event.target.value})
 }

 onChangeMensagem = (event) =>{
   this.setState({valorInputMensagem:event.target.value})

 }
 
  render(){
   
    const listaDeComponentes = this.state.mensagem.map((conversa) => {
      return(
        <p><b>{conversa.nomeUsuario}</b>   {conversa.mensagemUsuario}</p>
      );
    });

    return(

      <MainContainer>
        <Campo>{listaDeComponentes}</Campo>
        
        <div>
                     
         <InputUsuario 
          value={this.state.valorInputUsuario} 
          placeholder="Nome"
          onChange={this.onChangeNomeUsuario}
          />
           
          
         <InputMensagem
         value={this.state.valorInputMensagem} 
         placeholder="Mensagem"
         onChange={this.onChangeMensagem}
         />
         
         <Buttom onClick={this.adicionaMensagem}>Enviar</Buttom>
       
        </div >
        
        
        
      </MainContainer>
    );
  }
}

export default App;
