import React from "react";
import styled from 'styled-components';


const ContainerPequeno = styled.div`
   
    display: flex;
    align-items: center;
    border: 1px solid purple;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 90px;
`
const ContainerImg = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
    
`


function CardPequeno(props) {
    return (
        <ContainerPequeno>
            <ContainerImg src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
            </div>
        </ContainerPequeno>
    )
}

export default CardPequeno