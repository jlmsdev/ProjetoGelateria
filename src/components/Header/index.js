import logoGelateria from '../../assets/logo.png';
import './header.css';

export default function Header() {
    return(
        <header>

            <div className='areaMenu'>

                <a href="/">
                    <img className='logo' src={ logoGelateria } alt="Logo Gelateria" />
                </a>
                
                <nav className='navegacao'>
                    <a href="/">Home</a>
                    <a href="/">Sabores</a>
                    <a href="/">Sobre</a>
                </nav>

            </div>
            
        </header>
    );
}