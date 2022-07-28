import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import foguete from '../img/foguete.png';
import styled from 'styled-components';

const Header = styled.header`
display:flex;
background: linear-gradient(90deg, rgba(17,102,105,1) 18%, rgba(17,38,105,1) 46%, rgba(12,44,146,1) 69%, rgba(0,5,255,1) 89%);
align-items:center;
padding:0 20px; 
color:white;
font-family: 'Lobster', cursive;

`

const Button = styled.button`
background-color:rgba(17,102,105,1);
cursor: pointer;
border:none;
margin-left:1100px;
border-radius:5%;
width:80px;
height:30px;
&:hover{
    background-color:rgba(12,44,146,1);
}

`

const Img = styled.img`
width:50px;

`

const Nav = styled.nav`

background-color:lightcyan;
background-size:50%;
height:89.3vh;
padding-left:400px;

`

function TripDetailsPage(){
    const navigate = useNavigate()
    // const [candidate, setCandidate] = useState([])

useEffect(()=>{
   const token = localStorage.getItem('token');

   if(token === null){
     navigate("/")
   }
},[navigate])    

useEffect(()=>{
    const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/${id}?auth=erica-lima-hopper'
    const headers = {
        headers:{
            auth:localStorage.getItem("token")
        }
    }
    axios.get(URL,headers)
    .then((response)=>{
        console.log(response.data.trip)
        // setCandidate(response.data.trip)
    })
    .catch((error)=>{
        console.log(error.response)
    })
},[])

    return(
        <div>
            <Header>
                <h2>LabeX</h2>
                <Img src={foguete}></Img>
                <Button onClick={() => navigate("/")}>Voltar</Button>
            </Header>
            <Nav>
                {/* <div>
                {candidate.filter((candidatos)=>{
                    return <p>{candidatos.candidates}</p>
                })}
                </div> */}
            </Nav>
        </div>
    )
}

export default TripDetailsPage