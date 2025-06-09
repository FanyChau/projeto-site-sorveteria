import estilos from './sabores.module.css';
import banner from '../../../public/banner-sabores.jpg';
export default function Sabores() {
    return (
        <section className={estilos.secao_sabores}>
             <div className={estilos.imagem_banner_sabores} style={{       backgroundImage: `url(${banner.src})`,
             backgroundRepeat: 'no-repeat',
             height: '100vh',
             width: '100%',
             backgroundPosition: 'center',
             backgroundSize: 'cover',
        }}>    
                 <div className={estilos.texto_banner_sabores}>
                   <h1>NOSSOS SABORES</h1>
                 </div>
            </div>
        </section>
    )
}