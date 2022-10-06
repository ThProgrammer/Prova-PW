import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Frete from './pages/Frete';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/' element={<Login/>} />
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
