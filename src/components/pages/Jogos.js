import Styles from "./Jogos.module.css";
import JogosCard from "./jogosCard";
import dadosJogos from '../jogos.json';

function Jogos() {
  return (
<section>
      <div>
        <h1 className={Styles.jogos}>JOGOS</h1>
        <hr></hr>
      </div>
      <div>
        <JogosCard jogos={dadosJogos} />
      </div>
    </section>
  );
}

export default Jogos;
