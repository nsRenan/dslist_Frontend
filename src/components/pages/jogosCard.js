import React from 'react';
import Styles from './JogosCard.module.css';
import ButtonCard from '../buttons/ButtonCard';

function JogosCard({ jogos, onCardClick }) {
  return (
    <section className={Styles.details_container}>
      {jogos.map((jogo, index) => (
        <div key={index} className={Styles.jogos_card} onClick={() => onCardClick(jogo)}>
          <img src={jogo.img_url} alt={jogo.title} />
          <div className={Styles.jogos_card_content}>
            <span className={Styles.title}>{jogo.title}</span>
            <p className={Styles.descricao}>
              <span>Descrição:</span> {jogo.short_description}
            </p>
            <p2 className={Styles.jogo_platforms}>
              <span>Plataformas:</span> {jogo.platforms}
            </p2>
            <ButtonCard value="Ver mais" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default JogosCard;
