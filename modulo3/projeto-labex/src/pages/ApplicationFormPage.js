import { useNavigate } from "react-router-dom"
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
margin:100px 20px;
border-radius:5%;
height:40px;
`


function ApplicationFormPage() {

    const navigate = useNavigate();

    return (
        <div>
            <Header>
                <H2 onClick={() => navigate("/")}>LabeX</H2>
            </Header>

            <Container>
                <h2>Por onde vamos nos aventurar Patrulheiro?</h2>

                <form>
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


                    <Button>Enviar</Button>


                </form>
            </Container>


        </div>
    )
}

export default ApplicationFormPage