import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import {Div,Button,Input, Img, Profile,P,Pagination} from './StyledUser'

const User = () => {

    const navigate = useNavigate()

    const [userList, setUserList] = useState([])
    const [itemPage, setItemPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("")
   

    const pages = Math.ceil(userList.length/itemPage)
    const startIndex = currentPage * itemPage
    const endIndex = startIndex + itemPage
    const currentIndex = userList.slice(startIndex, endIndex)

    useEffect(() => {

        axios.get('https://randomuser.me/api/?results=50')
            .then((response) => {
                setUserList(response.data.results)
            })
    }, [])
    console.log(userList)

 const filterPerson = currentIndex.filter((person)=> 
 person.login.username.includes(search.toLowerCase()) ||
 person.name.first.includes(search.toLowerCase()) ||
 person.name.last.includes(search.toLowerCase()) ||
 person.email.includes(search.toLowerCase())

 )
    return (
        <div>
            <Button onClick={() => { navigate("/") }}>voltar</Button>
            <Button onClick={() => { navigate("/cat") }}>Ir para página de gatos</Button>
         <Div>   
          
           <Input type='text' placeholder="Buscar..." value={search} onChange={(event) => setSearch(event.target.value)}></Input>
           
           {currentIndex && filterPerson.map((list,index) => {
                return (
                    <div key={index}>

                       <Profile>
                        <Img src={ list.picture.large}></Img>
                        <div>
                        <P>{list.login.username}</P>
                        <P>{list.name.title} {list.name.first} {list.name.last} ,{list.dob.age} anos</P>
                        <P>{list.email}</P>
                        </div>
                        
                        </Profile>
                     
                        
                    </div>
                )
            })}
           

            <div>{Array.from(Array(pages),(item,index) =>{
               return <Pagination value={index} onClick={(event)=> setCurrentPage(Number(event.target.value))}>{index + 1}</Pagination>
           })}</div>
          </Div> 
        </div>
    )
}

export default User