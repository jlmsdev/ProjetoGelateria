import './home.css';

import bannerHome from '../../assets/banner-home.png';


export default function Home() {
    return(
        <section className="bannerHome">

            <figure>
                <img className='imgHome' src={ bannerHome } alt="Imagem de Sorvete na Home Page" />

                <figcaption className='legendaImg'>SORVETE ARTESANAL</figcaption>
            </figure>

        </section>
    );
}