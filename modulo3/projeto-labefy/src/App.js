import React from "react";
import CriarPlaylist from "./components/CriarPlaylist";
import MinhaPlaylist from "./components/MinhaPlaylist";


class App extends React.Component {

  state={
    telaInicial: "Playlist",
    
   
        
  }
 

  trocarDeTela = () =>{
     
    this.setState ({telaInicial: this.state.telaInicial === "Playlist" ? "Minha Playlist" : "Playlist" })
  }
  detalhesPlaylist = () =>{
      this.setState({detalhes: this.state.detalhes === "Detalhes" ? "Minha Playlist" : "Detalhes"})
     }

  

    
  render(){
  return (
    <div className="App">
      <nav className="App-nav">
        
        
        {this.state.telaInicial === "Playlist" ? <CriarPlaylist troca = {this.trocarDeTela}/> : <MinhaPlaylist troca = {this.trocarDeTela}/>}
        
      </nav>
      
          
     

            
    </div>
  );
}
}
export default App;
