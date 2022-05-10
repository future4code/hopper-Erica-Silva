import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components';
import './App.css';


const Corpo = styled.div`
background-color:lightsalmon;
text-align:center;
width:25vw;
margin-left:500px;
height:450px;
border-radius:5%;
padding-top:20px;
margin-top:80px;
`



const Botao = styled.button`
border:none;
background-color:palegreen;
border-radius:5%;
margin: 30px 20px;
padding: 10px 20px;
cursor:pointer;

`

class App extends React.Component {

  state = {
    etapa: 1,

  }

  trocarEtapa = () => {
    if (this.state.etapa <= 3) {
      this.setState({ etapa: this.state.etapa + 1 });
    }

  }


  render() {

    let firstPage;

    switch (this.state.etapa) {
      case 1:
        firstPage = <Etapa1 />
        break

      case 2:
        firstPage = <Etapa2 />
        break

      case 3:
        firstPage = <Etapa3 />
        break

      case 4:
        firstPage = <Final />
        break
    }

    return (
      <Corpo>
        {firstPage}
        <Botao onClick={this.trocarEtapa}>Próxima etapa</Botao>
      </Corpo>
    );
  }
}

export default App;
