import { useState } from 'react';
import Header from '../../components/Header';
import './login.css';

function Login() {
    const [id, setId] = useState('');
    const lista = ['ana', 'thomas','carlos', 'admin'];

    function handleRegister(e) {
        e.preventDefault();
        
        if (lista.includes(id))
        alert("Bem Vindo ao Sistema");
        else {
            alert("Não Encontrado");
        }

    }

    return (
        <>
        <Header></Header>

        <form onSubmit={handleRegister} >
            <label>ID</label>
            <input onChange={(e) => {
                setId(e.target.value);
            }} />

            <label>Senha</label>
            <input/>
            
            <button type='submit'>Entrar no Sistema</button>
        </form>
        </>
    )
}

export default Login;