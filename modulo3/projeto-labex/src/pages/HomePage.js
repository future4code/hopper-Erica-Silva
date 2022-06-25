import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import planetas from '../img/planetas.gif';
import foguete from '../img/foguete.png'


const Header = styled.header`

display:flex;
background: linear-gradient(90deg, rgba(17,102,105,1) 18%, rgba(17,38,105,1) 46%, rgba(12,44,146,1) 69%, rgba(0,5,255,1) 89%);
align-items:center;
padding:0 20px; 
color:white;
font-family: 'Lobster', cursive;
      
`

const Img = styled.img`
width:50px;
`

const Nav = styled.nav`

background-image:url(${planetas});
background-size:50%;
height:89.3vh;
padding-left:500px;


`
const Button = styled.button`
background-color:rgba(17,102,105,1);
cursor: pointer;
border:none;
margin:200px 20px;
border-radius:5%;
height:50px;
&:hover{
    background-color:rgba(12,44,146,1);
}


`



function HomePage() {

    const navigate = useNavigate();


    return (

        <div>
            <Header>
                <h2>LabeX</h2>
             <Img src={foguete}></Img>  

            </Header>

            <Nav>
                
                <Button onClick={() => navigate("/trips/list")}>Ver Viagens</Button>
                <Button onClick={() => navigate("/login")}>Área do Adm</Button>
            </Nav>
        </div>
    )



}




export default HomePage