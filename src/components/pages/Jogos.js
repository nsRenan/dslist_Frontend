import Styles from "./Jogos.module.css";
import JogosCard from "./jogosCard";
import dadosJogos from '../jogos.json';

function Jogos() {
  return (
<section>
      <div>
        <h1 className={Styles.jogos}>Jogos</h1>
      </div>
      <div className={Styles.jogos}>
        <h3>Jogos Cadastrados</h3>
      </div>
      <div>
        <JogosCard jogos={dadosJogos} />
      </div>
    </section>
  );
}

export default Jogos;
