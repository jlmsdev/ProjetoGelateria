import './rodape.css';
import logo from '../../assets/logo.png';

export default function Rodape() {
    return(
        <footer className="containerRodape">

            <div className='areaRodape'>
    
                <figure>
                    <img className="logo" src={ logo } alt="Logo Sorveteria" />
                </figure>

                <section className="endereco">
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernadino de Campos, 98</p>
                    <p>São Pualo, SP 12345-678</p>
                </section>

                <section className="contato">
                    <h3>CONTATO</h3>
                    <p>Info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </section>
                
                <section className="horarios">
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </section>

            </div>

            <span>Geleteria. Orgulhosamente desenvolvido por "João Lucas Melo"</span>

        </footer>
    );
}