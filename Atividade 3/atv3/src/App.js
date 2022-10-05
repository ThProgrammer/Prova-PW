import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/frete' element={<Frete/>} />
          {/* 
              <Route path='cadastro' element={<Cadastro/> />
              <Route path='sobre' element={<Sobre/>}/>*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;