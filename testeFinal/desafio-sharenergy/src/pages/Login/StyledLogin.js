import styled from "styled-components";


export const Div = styled.div`
margin: 8em auto;
width: 100%;
max-width: 414px;
padding: 1.3rem;
display: flex;
flex-direction: column;
position: relative;
background:linear-gradient(191deg, rgba(101,12,224,0.8491771708683473) 9%, rgba(116,59,207,1) 26%, rgba(92,66,206,1) 53%, rgba(58,199,216,1) 69%, rgba(60,89,213,1) 84%);
border:1px solid #5e43a7;

`
export const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
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

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: rgba(101,13,195,1) 43%;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #743cdb;
    
  }
  
`
export const P = styled.p`
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
`
export const Lembre = styled.div`
text-align:center;
`

export const Erro = styled.p`
 color: #c61704;
  font-weight: 600;
  text-transform: uppercase;

`