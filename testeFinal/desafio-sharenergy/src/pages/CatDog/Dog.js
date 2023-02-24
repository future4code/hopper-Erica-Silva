import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {Button, Div, H1, Img} from './StyledDog'

const URL = "https://random.dog/woof.json"
const getRandomDog = async() =>{
  const response = await fetch (URL) 

  const body = await response.json()

  return body.url
}

const Dog = () => {

    const navigate = useNavigate()

    const [dog, setDog] = useState(null)

    const onClickHandle = async ()=>{
      
      const url = await getRandomDog()
      setDog(url)

    }
   useEffect(()=>{
    onClickHandle()
   },[]) 

    console.log(dog);

    return (
        <div>
           <Button onClick={() => { navigate("/") }}>voltar</Button>
           <Button onClick={() => { navigate("/cadastro") }}>Ir para página de Cadastrar usuário</Button>
          <Div>
            <H1>Dog</H1>

            
            {<Img src={dog}></Img>}      
            <Button value={dog} onClick={onClickHandle}>Refresh</Button>
            
           
        </Div>
        </div>
    )
}

export default Dog