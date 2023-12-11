import React, { useState } from "react";
import Styles from "./Jogos.module.css";
import JogosCard from './jogosCard';
import dadosJogos from '../jogos.json';
import JogosModal from "./JogosModal";

function Jogos() {
  const [modalAberto, setModalAberto] = useState(false);
  const [jogoSelecionado, setJogoSelecionado] = useState(null);

  const handleCardClick = (jogos) => {
    setJogoSelecionado(jogos);
    setModalAberto(true);
  };

  const handleCloseModal = () => {
    setModalAberto(false);
  };

  return (
    <section>
      <div>
        <h1 className={Styles.jogos}>JOGOS</h1>
        <hr></hr>
      </div>
      <div>
        <JogosCard jogos={dadosJogos} onCardClick={handleCardClick} />
        {modalAberto && (
          <JogosModal jogoSelecionado={jogoSelecionado} onClose={handleCloseModal} />
        )}
      </div>
    </section>
  );
}

export default Jogos;
