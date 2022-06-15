import React from "react";
import styled from "styled-components";




function HomePage(){
    const Header= styled.header`
    display:flex;
    background: linear-gradient(90deg, rgba(17,102,105,1) 18%, rgba(17,38,105,1) 46%, rgba(12,44,146,1) 69%, rgba(0,5,255,1) 89%);
    justify-content:space-between;
    align-items:center;
    padding:0 20px; 
    color:white;
          
    `

    const Nav = styled.nav`
    background-color:lightcyan;
    height:100vh;
    `
    const Button = styled.button`
    cursor: pointer;
    border:none;
    margin:200px 20px;
    border-radius:5%;
    height:40px;
    justify-items:center;
    align-items:center;
    `
    return(
    <div>
       <Header>
        <h2>LabeX</h2>
        <div>
            <p>Menu</p>
        </div>

       </Header>

       <Nav>
        <Button>Ver Viagens</Button>
        <Button>Área do Adm</Button>
       </Nav>
    </div>
)



}




export default HomePage