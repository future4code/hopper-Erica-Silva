import styled from "styled-components";

export const Div = styled.div `

margin: 0 auto;
width: 100%;
max-width: 414px;
padding: 0.8rem;
display: flex;
flex-direction: column;
position: relative;
background:rgba(49,77,159,0.7063200280112045) 57%;
border:1px solid rgba(75,209,190,1);
border-radius:5px;
justify-items:center;

`
export const Img = styled.img`
width:300px;
height:400px;
margin:0px 50px;
`
export const Button = styled.button`
 
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: linear-gradient(191deg, rgba(75,209,190,1) 17%, rgba(49,77,159,0.9192051820728291) 57%);
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

export const H1 = styled.h1`

 font-weight: 600;
 text-transform:uppercase;
 margin-left:170px

`