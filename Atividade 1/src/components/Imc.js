import {useState} from "react";

function Imc() {

    const [resultado, setResultado] = useState();
    const [imc, setImc] = useState();

    function calcimc (e) {
        e.preventDefault();

        if (imc < 18.5) {
            setResultado("Abaixo do peso");
        } else if (imc > 18.5 && imc < 24.9) {
            setResultado("Normal");
        } else if (imc > 24.9 && imc < 29.9) {
            setResultado("Sobrepeso");
        } else if (imc > 29.9 && imc < 34.9) {
            setResultado("Obesidade Grau I");
        } else  if (imc > 34.9 && imc < 39.9) {
            setResultado("Obesidade Grau II");
        } else {
            setResultado("Obesidade Mórbida");
        }
    } 

    return (

        <>
            <form onSubmit={calcimc}>
                <label>IMC: </label>
                <input onChange={(e) => {setImc(e.target.value);}}/> <br/>

                <input type='submit'/>
            </form>

            <p>Resultado: {resultado}</p>
        </>
    )
    
}

export default Imc;