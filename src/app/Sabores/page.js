import Image from 'next/image';
import oreo from '../../../public/sabor-oreo.png';
import cokies from '../../../public/sabor-cookies-avela.png';
import pistache from '../../../public/sabor-pistache.png';
import morango from '../../../public/sorbet-morango.png';
import kiwi from '../../../public/sorbet-kiwi.png';
import limao from '../../../public/sorbet-limao.png';
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
            <section className={estilos.secao_sorvetes}>
                <h2>SABORES DE SORVETE</h2>
                <div className={estilos.container_cards}>
                <div className={estilos.card}>
                    <Image src={oreo} alt="Sorvete de Oreo" />
                    <h3>Sorvete de Oreo</h3>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>
                <div className={estilos.card}>
                    <Image src={pistache} alt="Sorvete de Pistache" />
                    <h3>Sorvete Pistache</h3>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>
                <div className={estilos.card}>
                    <Image src={cokies} alt="Sorvete de Cookies com Avelã" />
                    <h3>Sorvete de Cookies & Avelã</h3>
                    <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                </div>
                <div className={estilos.card}>
                    <Image src={kiwi} alt="Sorvete de Kiwi" />
                    <h3>Sorvete de Kiwi</h3>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>
                <div className={estilos.card}>
                    <Image src={morango} alt="Sorvete de Morango" />
                    <h3>Sorvete de Morango</h3>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>
                <div className={estilos.card}>
                    <Image src={limao} alt="Sorvete de Limão" />
                    <h3>Sorvete de Limão Siciliano</h3>
                    <p> incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                </div>
              </div>
            </section>
        </section>
    )
}