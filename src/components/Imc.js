import {useState} from "react";

function Imc() {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [resultado, setResultado] = useState();
    const [print, setPrint] = useState("______");

    function handleRegister(e) {
        var calcprint;
        e.preventDefault();
        
        setResultado(peso/(altura*altura));

        if (resultado < 18.5) {
            calcprint = "Abaixo do peso";
        }
        if (resultado > 18.5) {
            calcprint = "Normal";
        }

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

        <p>Resultado: {resultado}</p>
        <p>Você está {print}</p>
        </>


    )
    
}

export default Imc;