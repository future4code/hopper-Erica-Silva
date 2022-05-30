import axios from "axios";
import React from "react";






class MinhaPlaylist extends React.Component{

    state = {
       playlist: [],
      
       
       
       
          
    }
   

    componentDidMount(){
        this.pegarPlaylist()
    }

    pegarPlaylist = () =>{
       axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {headers:{Authorization:"erica-lima-hopper"}})

       .then((response) =>{
        console.log(response)
        this.setState({playlist:response.data.result.list}) 
         
       })
       .catch((error) =>{
           console.log(error.response)

       })
        
    }

    deletarPlaylist = (id) =>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {headers:{Authorization:"erica-lima-hopper"}
    })
    .then(() =>{
        alert("Playlist deletada com sucesso")
        this.pegarPlaylist()
    })
    .catch(() =>{
        alert("Erro ao deletar playlist")
    })
    }

         
    render(){
    return(
        
        <div>
           
            <button onClick={this.props.troca}>Home</button>
            <h2>Minha Playlist</h2>
           
          {
              this.state.playlist.map((playlists) => {
                return(
                    <ul>
                        
                        <li>{playlists.name}</li>
                       <button onClick={() => this.deletarPlaylist(playlists.id)}>x</button>
                       <button onClick={this.detalhesPlaylist}>Ir para músicas</button>
                                                        
                      
                    </ul>
                )
                
            })}
            
          
        </div>
    
    )
    }
    }
    



export default MinhaPlaylist