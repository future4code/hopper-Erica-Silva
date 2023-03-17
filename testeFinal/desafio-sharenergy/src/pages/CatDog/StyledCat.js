import styled from "styled-components";

export const Div = styled.div `

margin: 1rem auto;
width: 100%;
max-width: 414px;
padding: 1.3rem;
display: flex;
flex-direction: column;
position: relative;
background:rgba(9,43,38,0.5998774509803921) 17%;
border:1px solid rgba(9,43,38,1);
border-radius:5px;
justify-items:center;

`

export const Img = styled.img`
width:300px;
height:300px;
margin:0px 50px;
`
export const Button = styled.button`
 
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: linear-gradient(191deg, rgba(9,43,38,1) 17%, rgba(2,14,47,0.7063200280112045) 57%);
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin: 0.6rem 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgba(49,77,159,0.9192051820728291) 57%;
    
  }
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 5px 13px;
  background: #f9f9fa;
  color: rgba(114,10,226,1) 79%;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

export const H1 = styled.h1`
 color: #dedcd3;
 font-weight: 600;
 text-transform:uppercase;
 margin-left:170px

`