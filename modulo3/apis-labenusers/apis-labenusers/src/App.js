import React from 'react';
import TelaCadastro from './components/TelaCadastro';
import TelaLista from './components/TelaLista';

class App extends React.Component{

  state = {
    telaAtual:"cadastro"
  }

trocaDeTela = () =>{
  this.setState({
    telaAtual: this.state.telaAtual === "cadastro"
  ? "lista"
  :"cadastro"})
}


  render(){
    return(
      <div>
       {
         this.state.telaAtual === "cadastro" 
         ? <TelaCadastro troca ={this.trocaDeTela}/> 
         : <TelaLista troca ={this.trocaDeTela}/>
       }
      </div>
    )
  }
}

export default App;
