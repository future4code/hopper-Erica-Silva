import React from "react";
import axios from "axios";

class CriarPlaylist extends React.Component {

    state = {

        playlistNome: "",


    }

    criarMinhaPlaylist = (event) => {
        this.setState({ playlistNome: event.target.value })


    }

    criarMusicas = () =>{
const body = {
    "name": this.state.playlistNome
}

      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body, {headers:{Authorization:"erica-lima-hopper"}
        
    })
    .then(() =>{
        console.log("cadastro feito com sucesso")
    })
    
    .catch(() => {
        alert("Nome da playlist já existe, tente novamente")
    })
    }




    render() {
        return (

            <div>
                <button onClick={this.props.troca}>Minhas Playlists</button>

                <h2>Tela Criar Playlist</h2>
                <input placeholder="Nome da playlist" value={this.state.playlistNome} onChange={this.criarMinhaPlaylist}></input>
                <button onClick={this.criarMusicas}>Criar</button>
            </div>

        )

    }
}





export default CriarPlaylist