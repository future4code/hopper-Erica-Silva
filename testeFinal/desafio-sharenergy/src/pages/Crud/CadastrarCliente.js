import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState, Fragment } from "react"
import VerUsuario from "./components/VerUsuario";
import EditableUsuario from "./components/EditableUsuario";
import {Container,Table,Button, Input, Cadastro, AreaUsuario} from "./StyledCrud"



const CadastrarCliente = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState([])
    const [userList, setUserList] = useState([])
    const [onEdit, setOnEdit] = useState(null)
    const [editUser, setEditUser] = useState([])
  
    const handleAddChange = (value) => {
    
   setUser((prevValue) =>({
    ...prevValue,
    [value.target.name]:value.target.value
   }))
  
   console.log(user)  
    }

  const handleEditChange = (event) =>{
    event.preventDefault()
    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = {...editUser}
    newFormData[fieldName] = fieldValue

    setEditUser(newFormData)

  }

    const handleAddFormSubmit = (event) =>{
     
     const user = {
      nome: event.target.nome.value,
      email: event.target.email.value,
      fone: event.target.fone.value,
      cpf: event.target.cpf.value,
     }

     saveUser(user)
    
    }
   
    const handleEditFormSubmit = (event) => {
      const editedUser = {
        id: event.target.id.value,
        nome: event.target.nome.value,
        email: event.target.email.value,
        fone: event.target.fone.value,
        cpf: event.target.cpf.value,
      }

      editarUser(editedUser)
   
    }

    const handleEditClick = (event,value) =>{
     event.preventDefault()
     setOnEdit(value.id)

     const formValues = {
      id: value.id,
      nome:value.nome,
      email:value.email,
      fone:value.fone,
      cpf:value.cpf
     }

     setEditUser(formValues)
    }

    const handleCancelClick = ()=>{
      setOnEdit(null)

    }

    const handleDeleteClick = (id) =>{
      deleteUser(id)
    }
    
    const saveUser = (user) =>{
      axios.post("http://localhost:3001/cadastro", {
        nome:user.nome,
        email:user.email,
        fone:user.fone,
        cpf:user.cpf
      })
      .then((response) =>{
        console.log(response)
      })
    }

    const editarUser = (user) =>{
      axios.put("http://localhost:3001/editar",{
        id:user.id,
        nome:user.nome,
        email:user.email,
        fone:user.fone,
        cpf:user.cpf
      })
      .then((response) =>{
        console.log(response)

      })
      
    }

    const deleteUser = (id) =>{
      axios.delete(`http://localhost:3001/excluir/${id}`)
     .then((response)=>{
      console.log(response);
     } ) 
    }
   
   useEffect(()=>{
    axios.get("http://localhost:3001/getCadastro")
    .then((response)=>{
      setUserList(response.data)
      console.log(userList)
    })
   },[])
 


    return (
        <Container>
                     
           <Cadastro onSubmit={handleAddFormSubmit}>
                        
            <Input name="nome"  onChange={handleAddChange} placeholder="nome"></Input>
            <Input name="email" type="email"  onChange={handleAddChange} placeholder="email"></Input>
            <Input name="fone"  onChange={handleAddChange} placeholder="telefone"></Input>
            <Input name="cpf" type="number" onChange={handleAddChange} placeholder="cpf"></Input>
            <Button type="submit"> Cadastrar</Button>
           
           </Cadastro>
       
          <form onSubmit={handleEditFormSubmit}>
          <Table>
           <thead>
            <th>Nome</th>
            <th>Email</th>
            <th>Fone</th>
            <th>CPF</th>
            <th></th>
           </thead>
           <tbody>
            {userList.map((value,index)=>(
               <Fragment key={index}>
                {onEdit === value.id 
                ? (<EditableUsuario onEdit={onEdit} handleEditChange={handleEditChange} data={value} handleCancelClick={handleCancelClick} />) 
                : (<VerUsuario value={value} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>) }
               
               </Fragment>
               
               
            ))}     
          </tbody>
             
           
           </Table>
         </form>
            <Button onClick={() => { navigate("/") }}>voltar</Button>
               
        </Container>
    )
}
export default CadastrarCliente