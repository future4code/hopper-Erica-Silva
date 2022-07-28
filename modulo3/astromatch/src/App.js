import './App.css';
import React, { useState} from 'react';
import TelaInicial from './components/TelaInicial'
import TelaListaMatch from './components/TelaListaMatch';






function App() {


  const [mostrarTelaIncial, setMostrarTelaInicial] = useState('telaInicial')
 

  function trocarTelaInicial() {
    setMostrarTelaInicial(mostrarTelaIncial === 'telaInicial' ? 'lista' : 'telaInicial')
  }



  return (

    <div className="App">


      {mostrarTelaIncial === 'telaInicial' ? <TelaInicial trocar={trocarTelaInicial} /> : <TelaListaMatch trocar={trocarTelaInicial} />}
      
    
    </div>
  );
}

export default App;
