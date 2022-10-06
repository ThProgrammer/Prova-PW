import Header from '../../components/Header';
import {useState} from 'react';

function Cadastro() {
    const [razaoSocial, setRazaoSocial] = useState("");
    const [endereço,setEndereço] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [dados, setDados] = useState({
        razaoSocial: '',
        endereço: '',
        cnpj: '',
    })

    function handleRegister(e) {
        e.preventDefault();
        setDados({
            razaoSocial: razaoSocial,
            endereço: endereço,
            cnpj: cnpj,
        })
    }
    return (
        <>
            <Header></Header>
            <h1>Cadastro</h1>

            <form onSubmit={handleRegister}>
                <label>Razão Social</label>
                <input onChange={(e) => {
                    setRazaoSocial(e.target.value);
                }}/>
                <label>Endereço</label>
                <input onChange={(e) => {
                    setEndereço(e.target.value);
                }}/>
                <label>CNPJ</label>
                <input onChange={(e) => {
                    setCnpj(e.target.value);
                }}/>
                <button type='submit'>Cadastrar</button>
            </form>
            <br/><br/>
            <div>
                <h3>Razão Social: {dados.razaoSocial}</h3>
                <h3>Endereço: {dados.endereço}</h3>
                <h3>CNPJ: {dados.cnpj}</h3>
            </div>
            
        </>

        
    )
}

export default Cadastro;