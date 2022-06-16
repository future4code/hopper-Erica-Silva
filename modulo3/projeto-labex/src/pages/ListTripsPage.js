import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
display:flex;
background: linear-gradient(90deg, rgba(17,102,105,1) 18%, rgba(17,38,105,1) 46%, rgba(12,44,146,1) 69%, rgba(0,5,255,1) 89%);
justify-content:space-between;
align-items:center;
padding:0 20px; 
color:white;

`
const H2 = styled.h2`
cursor: pointer;
`
const Container = styled.div `
background-color:lightcyan;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
const Button = styled.button`
background-color:rgba(17,102,105,1);
cursor: pointer;
border:none;
margin:200px 20px;
border-radius:5%;
height:40px;
`


function ListTripsPage() {
    const navigate = useNavigate();

    return (
        <div>
            <Header>
                <H2 onClick={() => navigate("/")}>LabeX</H2>
            </Header>
            <Container>
            <h2>Lista de viagens</h2>
            <Button onClick={() => navigate("/trips/application")}>Começar sua aventura</Button>
            </Container>
        </div>
    )
}

export default ListTripsPage