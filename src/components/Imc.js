import {useState} from "react";

function Imc() {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [resultado, setResultado] = useState();

    function handleRegister(e) {
        e.preventDefault();

        setResultado(peso/(altura*altura));
    } 

    

    return (
        <>
        <form onSubmit={handleRegister}>
            <label>Peso</label>
            <input onChange={(e) => {
                setPeso(e.target.value);
            }}/>
            <br/>
            <label>Altura</label>
            <input onChange={(e) => {
                setAltura(e.target.value);
            }}/>
            <br/>
            <input type='submit'/>
        </form>

        <p>Resultado: {resultado}, {print}</p>
        </>


    )
    
}

export default Imc;