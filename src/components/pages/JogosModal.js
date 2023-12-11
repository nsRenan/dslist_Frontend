import React from 'react';
import Styles from './JogosModal.module.css';
import { Link } from 'react-router-dom';

function JogosModal({ jogoSelecionado, onClose }) {
  return (
    <section className={Styles.overlay}>
      <div className={Styles.modal}>
        <div className={Styles.container}>
          <div>
            <img src={jogoSelecionado.img_url} alt={jogoSelecionado.title} />
          </div>
          <div className={Styles.info}>
            <span className={Styles.title}>{jogoSelecionado.title}</span>
            <p className={Styles.descricao}>{jogoSelecionado.long_description}</p>
            <p className={Styles.gamespan}>
              <span>Gênero:</span> {jogoSelecionado.genre}
            </p>
            <p className={Styles.gamespan}>
              <span>Ano de lançamento:</span> {jogoSelecionado.game_year}
            </p>
            <p className={Styles.gamespan}>
              <span>Plataformas:</span> {jogoSelecionado.platforms}
            </p>
            <p className={Styles.nota}>
              <span>Nota:</span> {jogoSelecionado.score}
            </p>
            <Link to={jogoSelecionado.trailer_url}>
              <button className={Styles.btnModal}>Assistir Trailer</button>
            </Link>
          </div>
          <button className={Styles.close} onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </section>
  );
}

export default JogosModal;
