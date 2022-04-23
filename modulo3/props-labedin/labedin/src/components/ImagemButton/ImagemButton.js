import React from 'react';
// import './ImagemButton.css'
import styled from 'styled-components';


const ButtomDiv = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid purple;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
 `
 const ButtomImg = styled.img`
   width: 30px;
   margin-right: 10px;
 `

function ImagemButton(props) {
    return (
        <ButtomDiv>
            <ButtomImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ButtomDiv>

    )
}

export default ImagemButton;