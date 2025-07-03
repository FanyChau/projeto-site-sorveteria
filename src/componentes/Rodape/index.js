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
                <p>Rua 10 de Novembro, nº 789, Bairro Sommerschield</p>
                <p>Maputo, Moçambique, CP 54321-987</p>
            </div>
            <div className={estilos.card_contato}>
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel: (+258) 765 4321</p>
            </div>
            <div className={estilos.card_contato}>
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>
        <div className={estilos.texto_footer}>
           <p>Gelateria. Desenvolvido por Chauwebservices</p>
        </div>
        </footer>
        
       
    )
}