import estilos from './Topo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.png';
export default function Topo() {
    return (
        <header className={estilos.container_topo}>
            <div className={estilos.secao_limitada}>
            <Image className={estilos.imagem_logo} src={logo} alt="Logo da Sorveteria" />
            <div className={estilos.borda}></div>
            <nav className={estilos.menu_topo}>
                <Link href="/">Home</Link>
                <Link  className={estilos.link_Sabores} href="/Sabores">Sabores</Link>
                <Link className={estilos.link_Sobre} href="/Sobre">Sobre</Link>
            </nav>
            </div>
        </header>
    );
}