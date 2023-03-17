import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastrarCliente from './pages/Crud/CadastrarCliente';
import Cat from './pages/CatDog/Cat';
import Dog from './pages/CatDog/Dog';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/Login/LoginPage';
import User from './pages/User/User';



function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LoginPage/>}/>
        <Route path={"/user"} element={<User/>}/>
        <Route path={"/cat"} element={<Cat/>}/>
        <Route path={"/dog"} element={<Dog/>}/>
        <Route path={"/cadastro"} element={<CadastrarCliente/>}/>
        <Route path={"*"} element={<ErrorPage/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
