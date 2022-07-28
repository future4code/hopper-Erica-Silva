import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
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
const Container = styled.div`
background-color:lightcyan;
height:100%;
display:flex;
flex-direction:column;

`

const H2 = styled.h2`

margin-left: 45%;
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
const ButtonInput = styled.button`
background-color:rgba(17,102,105,1);
cursor: pointer;
border:none;
border-radius:5%;
width:150px;
height:30px;
margin:20px 620px;
&:hover{
    background-color:rgba(12,44,146,1);
}

`
const Trip = styled.p`
background-color:#f0ffff;
width:40%;
box-shadow:2px 2px 2px rgba(17,102,105,1);
margin-left:400px;
padding:20px 50px;
border-radius:10px;


`


function ListTripsPage() {
    const [trips, setTrips] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips?auth=erica-lima-hopper")
            .then((response) => {
                console.log(response.data.trips);
                setTrips(response.data.trips)
            })
    }, [])


    return (
        <div>
            <Header>
                <h2>LabeX</h2>
                <Img src={foguete}></Img>
                <Button onClick={() => navigate("/")}>Voltar</Button>
            </Header>
            <div>
                <Container>
                   
                <ButtonInput onClick={() => navigate("/trips/application")}>Começar sua aventura</ButtonInput>
                

                    <H2>Lista de viagens</H2>
                    <div>

                        {trips.map((trip) => {
                            return <Trip><b>Nome: </b>{trip.name}<br />
                                <b>Descrição: </b> {trip.description}<br />
                                <b>Planeta: </b>{trip.planet}<br />
                                <b>Data de decolagem: </b>{trip.date}<br />
                                <b>Duração: </b>{trip.durationInDays} dias

                            </Trip>
                        })}

                    </div>
                   
                </Container>
            </div>

        </div>
    )
}

export default ListTripsPage