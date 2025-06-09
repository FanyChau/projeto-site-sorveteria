import SecaoSobre from "@/componentes/SecaoSobre";
import estilos from "./page.module.css";
import Capa from "@/componentes/SecaoCapa";
export default function Home() {
  return (
    <div className={estilos.page}>
      <main className={estilos.main}>
       <Capa />
       <SecaoSobre />
      </main>
    </div>
  );
}
