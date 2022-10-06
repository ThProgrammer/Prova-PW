import { Link } from 'react-router-dom';
import {FaRoute} from 'react-icons/fa';
import './header.css';

function Header () {
    return (
        <>
        <header>
            <Link to='/'><FaRoute fontSize={'2.5em'} id='logo' /></Link>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/frete'>Frete</Link>
                <Link to='cadastro'>Cadastro</Link>
                <Link to='/sobre'>Sobre Nós</Link>
            </nav>
        </header>
        </>
    )
}

export default Header;