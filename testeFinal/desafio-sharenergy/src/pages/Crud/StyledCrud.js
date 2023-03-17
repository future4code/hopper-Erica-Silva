import styled from "styled-components"

export const Container = styled.div`
width:100%;
max-width:800px;
margin:50px 100px;
padding:20px 150px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
justify-items:center;
gap:10px;
background-color:#ad8fee;


`

export const Table = styled.table`
table {
  display:flex;
  margin:50px 100px;
  padding:20px 100px;
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
 
 
}
td,th {
  border: 1px solid #6495ED;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius:3px;
  
}
td {
  background-color:#cab5f9
}
th{
  background-color:#8d64e7
}

`
export const Button = styled.button`
  max-width: 100%;
  padding: 8px 13px;
  color: rgb(253, 249, 243);
  font-weight: 400;
  text-transform: uppercase;
  background: rgba(101,13,195,1) 43%;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin: 0.6rem 0.2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #743cdb;
    
  }
  
`
export const Input = styled.input`
  max-width: 100%;
  padding: 8px 2px;
  background: #f9f9fa;
  color: rgba(114,10,226,1) 79%;
  margin: 0.5rem 0.2rem;
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
export const Cadastro = styled.form`
display:flex;
`


