import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
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
const H2 = styled.h2`
margin:0 100px;
padding:50px;

`
const Img = styled.img`
width:50px;
`
const Input = styled.input`
margin-left:20px;
margin-right:10px;
`

const Nav = styled.nav`

background-color:lightcyan;
background-size:50%;
height:89.3vh;
padding-left:400px;

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
width:80px;
height:20px;
&:hover{
    background-color:rgba(12,44,146,1);
}
`


function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }


    function onClickLogin() {
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/login?auth=erica-lima-hopper";

        const body = {
            email: email,
            password: password
        }

        axios.post(URL, body)
            .then((response) => {
                console.log(response.data.token);
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/:id")

            })
            .catch((error) => {
                console.log(error.response.data)
            })

    }


    return (
        <div>

            <Header>
                <h2>LabeX</h2>
                <Img src={foguete}></Img>
                <Button onClick={() => navigate("/")}>Voltar</Button>
            </Header>
            <Nav>
                <H2>Àrea Login</H2>

                <Input type="email" placeholder="email" value={email} onChange={onChangeEmail} />
                <Input type="password" placeholder="insira sua senha" value={password} onChange={onChangePassword} />
                <ButtonInput onClick={onClickLogin}>Entrar</ButtonInput>
            </Nav>
        </div>
    )
}

export default LoginPage