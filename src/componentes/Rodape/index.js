import Image from 'next/image';
import logo from '../../../public/logo.png';
import estilos from './Rodape.module.css';
export default function Rodape (){
    return (  
        <footer className={estilos.footer}>
            <div className={estilos.rodape}>
                <div className={estilos.card_imagem}>
                   <Image className={estilos.imagem_logo} src={logo} alt="Logo da Sorveteria" />  
                </div>
            <div className={estilos.card_contato}>
                <h3>ENDEREÇO</h3>
                <p>Av. Bernardino de Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div className={estilos.card_contato}>
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11) 3456-7890</p>
            </div>
            <div className={estilos.card_contato}>
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>
             <div className={estilos.texto_footer}>
            <p>Gelateria. Orgulhosamente desenvolvido por Epifanio Chau</p>
           </div>
        </footer>

       
    )
}