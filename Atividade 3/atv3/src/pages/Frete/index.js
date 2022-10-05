import Header from '../../components/Header';
import { useState } from 'react';

function Frete() {
    {/*CONSTANTES*/}
    const valorTonelada = 2.50;
    const [peso, setPeso] = useState(0);
    const [destino, setDestino] = useState("");
    const [frete, setFrete] = useState(0);
    const [km, setKm] = useState(0);
    const lista = [{
        cidade: "Osasco",
        distancia: 22,
    }, {
        cidade: "Santo André",
        distancia: 20,
    }, {
        cidade: "São Bernardo do Campo", 
        distancia: 26,
    }, {
        cidade: "Diadema",
        distancia: 20,
    }];

    {/*Funções Auxiliares */}
    function calcularFrete(e) {
        e.preventDefault();
        obterDistancia();
        setFrete((peso * valorTonelada) * km);
    }

    function obterDistancia() {
        lista.forEach(loopLista);
    }

    function loopLista(element) {
        if (element.cidade === destino) {
            setKm(element.distancia);
        };
    }

    {/*Página */}
    return (
        <>
            <Header></Header>
            <form onSubmit={calcularFrete}>

                <label>Peso</label>
                <input onChange={(e)=> {
                    setPeso(e.target.value);
                }}/>
                <label>Destino</label>
                <input onChange={(e)=>{
                    setDestino(e.target.value);
                }}/>

                <button type='submit'>Calcular</button>
            </form>

            <div className='resultante'>
                <h2>Destino: {destino}</h2>
                <h2>Peso: {peso}</h2>
                <h2>Valor do Frete: {frete}</h2>
            </div>
        </>
    )
}

export default Frete;