import Header from '../../components/Header';

function Frete() {
    return (
        <>
            <Header></Header>
            <form>

                <label>Peso</label>
                <input/>
                <label>Destino</label>
                <input/>

                <button type='submit'>Calcular</button>
            </form>
        </>
    )
}

export default Frete;