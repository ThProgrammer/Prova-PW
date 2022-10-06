import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Frete from './pages/Frete';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/frete' element={<Frete/>} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
