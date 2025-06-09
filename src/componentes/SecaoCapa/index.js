import Image from 'next/image';
import estilos from './SecaoCapa.module.css';
import banner from '../../../public/banner-home.png';
export default function SecaoCapa(){
    return (
        <section className={estilos.secao_capa} >
            <div className={estilos.imagem_banner_home} style={{ backgroundImage: `url(${banner.src})`,
        backgroundRepeat: 'no-repeat',
       height: '90vh',
        backgroundPosition: 'center',
        
        
        }}>
                
            <div className={estilos.texto_capa}>
                 <h1>SORVETE ARTESANAL</h1>
               </div>
            </div>
            
             
        </section>
    )
}