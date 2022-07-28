import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import foguete from '../img/foguete.png'


const Header = styled.header`

display:flex;
background: linear-gradient(90deg, rgba(17,102,105,1) 18%, rgba(17,38,105,1) 46%, rgba(12,44,146,1) 69%, rgba(0,5,255,1) 89%);
align-items:center;
padding:0 20px; 
color:white;
font-family: 'Lobster', cursive;
      
`
const H2 = styled.h2`
cursor: pointer;
`

const Img = styled.img`
width:50px;
`

const Container = styled.div`
font-weight:bolder;
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
margin:20px 300px;
&:hover{
    background-color:rgba(12,44,146,1);
}

`

const Form = styled.form`
display:flex;
flex-direction:column;
width:50%;

`


function ApplicationFormPage() {

    const navigate = useNavigate();

    return (
        <div>
           <Header>
                <h2>LabeX</h2>
                <Img src={foguete}></Img>
                <Button onClick={() => navigate("/trips/list")}>Voltar</Button>
            </Header>

            <Container>
                <h2>Por onde vamos nos aventurar Patrulheiro?</h2>

                <Form>
                    Nome:<input type="name" /><br />

                    Idade:<input type="number" /><br />


                    Gênero:<br />
                    <input type="radio" name="sex" value="male" /> Masculino <br />

                    <input type="radio" name="sex" value="female" /> Feminino <br />

                    Para onde você quer se aventurar? <br />
                    <select>
                        <option></option>
                        <option>Marte</option>
                        <option>Júpiter</option>
                        <option>Vênus</option>
                        <option>Saturno</option>

                    </select> <br />


                    <ButtonInput>Enviar</ButtonInput>


                </Form>
            </Container>


        </div>
    )
}

export default ApplicationFormPage