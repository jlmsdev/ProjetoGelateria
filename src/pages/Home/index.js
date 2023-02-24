import './home.css';

import bannerHome from '../../assets/banner-home.png';
import bannerSorvete from '../../assets/banner-sabores.jpg';
import bannerEventos from '../../assets/eventos-image.jpg';


export default function Home() {
    return(
        <>
            <section className="bannerHome">

                <figure className='containerImage'>
                    <img className='imgHome' src={ bannerHome } alt="Imagem de Sorvete na Home Page" />

                    <figcaption className='legendaImg'>SORVETE ARTESANAL</figcaption>
                </figure>

            </section>
            
            <main className='containerInfo'>

                <section className='bannerSorvete'>
                    <figure className='imgSorvete'>
                        <img src= { bannerSorvete } alt="Banner Sorvete" />
                    </figure>
                </section>

                <section className='textoInstitucional'>
                    <h2>NOSSOS SABORES</h2>
                    <h3>Novos e deliciosos!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, libero magnam perferendis ad error repudiandae non sapiente! Ducimus, odio id architecto sint incidunt qui accusamus amet quae officia ipsum expedita.
                    Minus animi, tempore aut velit consectetur veritatis quo labore distinctio consequatur cupiditate iste quasi amet accusantium libero qui magni hic sit exercitationem fuga, nihil quos praesentium impedit! Nobis, ab voluptatum?</p>
                </section>

            </main>

            <section className='containerEventos'>
                
                <section className='infoEventos'>
                    <h2>NOSSOS EVENTOS</h2>
                    <h3>Delicias de sorvete!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, libero magnam perferendis ad error repudiandae non sapiente! Ducimus, odio id architecto sint incidunt qui accusamus amet quae officia ipsum expedita.
                    Minus animi, tempore aut velit</p>
                </section>

                <figure className='imageEvento'>
                    <img src= { bannerEventos } alt="Banner Eventos" />
                </figure>

            </section>



        </>
    );
}