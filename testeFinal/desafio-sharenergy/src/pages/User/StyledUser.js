import styled from "styled-components";

export const Div = styled.div `

margin: 1rem auto;
width: 100%;
max-width: 414px;
padding: 1.3rem;
display: flex;
flex-direction: column;
position: relative;
background:#f7a27c;
border:1px solid #f03d4e;
border-radius:5px;


`

export const Button = styled.button`
 
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin: 0.6rem 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    
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

export const Img = styled.img`
border-radius:50%;
width:100px;
height:100px;
margin:10px 5px;



`
export const Profile = styled.div`
display:flex;
box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1), 5px 5px 5px rgba(0, 0, 0, 0.1);
border-radius:5px;
margin-bottom:0.9rem;
background-color:#dd8d71;

`
export const P = styled.p`
 color: #dedcd3;
 font-weight: 600;
`

export const Pagination = styled.button`
background:#f7a27c;
border:none;
cursor: pointer;
:hover{
    text-decoration:underline;
}
`

