import estilos from './sobre.module.css';
import Image from 'next/image';
import banner from '../../../public/banner-sobre.png';
import sobre from '../../../public/sobre-image.jpg';
import sorveteria from '../../../public/sorveteria.jpg';
export default function Sobre() {
    return (
        <section>
            <div className={estilos.imagem_banner_sobre} style={{
                backgroundImage: `url(${banner.src})`,
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>
                <div className={estilos.texto_banner_sobre}>
                    <h1>A GELATERIA</h1>   
                </div>
            </div>
             <section className={estilos.secao_sobre}>
                    <h2>Sobre Nós</h2>
                    <span>Nós simplesmente amamos sorvete!</span>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </section>
                <section className={estilos.secao_imagens}>
                        <Image src={sobre} alt="Imagem Sobre" />
            
                        <Image src={sorveteria} alt="Imagem Sorveteria" />
                </section>
        </section>
    )
}