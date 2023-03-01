import './sobre.css';
import bannerSobre from '../../assets/banner-sobre.png';

export default function Sobre() {
    return(
        <section className='containerSobre'>
            <figure className='bannerSobre'>
                <img src= { bannerSobre } alt="Banner Sobre" />

                <figcaption className='textSobre'>
                    <span>SOBRE</span>
                </figcaption>
            </figure>
        </section>
    );
}