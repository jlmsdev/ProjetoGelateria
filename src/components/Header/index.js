import logoGelateria from '../../assets/logo.png';
import './header.css';

import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>

            <div className='areaMenu'>

                <a href="/">
                    <img className='logo' src={ logoGelateria } alt="Logo Gelateria" />
                </a>
                
                <nav className='navegacao'>
                   <Link to='/'>Home</Link>
                   <Link to='/sabores'>Sabores</Link>
                   <Link to='/sobre'>Sobre</Link>
                    
                </nav>

            </div>
            
        </header>
    );
}