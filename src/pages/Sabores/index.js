import './sabores.css';
import BannerSabores from '../../assets/banner-sabores.jpg';

export default function Sabores() {
    return(
        <section className='bannerSabores'>
            <figure>
                 <img src= { BannerSabores } alt="Banner Sabores" />
                 <figcaption className='legendaSorvete'>
                    <span>SABORES</span>
                 </figcaption>
            </figure>
        </section>
       
    );
}