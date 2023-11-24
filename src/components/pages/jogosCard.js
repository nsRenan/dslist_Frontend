import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Styles from './JogosCard.module.css';

function JogosCard({ jogos }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const escListener = useRef(null);

  useEffect(() => {
    escListener.current = (event) => {
      if (event.key === 'Escape') {
        setExpandedIndex(null);
        setShowVideo(false);
      }
    };

    window.addEventListener('keydown', escListener.current);

    return () => {
      window.removeEventListener('keydown', escListener.current);
    };
  }, []);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
    setShowVideo(false);
  };

  const handleTrailerClick = (event, trailerUrl) => {
    event.stopPropagation();
    setShowVideo(true);
  };

  const handleCloseClick = () => {
    setShowVideo(false);
  };

  return (
    <section className={Styles.details_container}>
      {jogos.map((jogo, index) => (
        <div
          key={index}
          className={`${Styles.jogos_card} ${index === expandedIndex ? Styles.expanded : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <img src={jogo.img_url} alt={`Imagem do ${jogo.title}`} />
          <div className={Styles.jogos_card_content}>
            <h4>{jogo.title}</h4>
            <p className={Styles.descricao}>
              <span>Descrição:</span> {jogo.short_description} 
            </p>
            <p2 className={Styles.jogo_platforms}>
              <span>Plataformas:</span> {jogo.platforms}
            </p2>
            {index === expandedIndex && (
              <div>
                <p>
                  <span>Score:</span> {jogo.score}
                </p>
                <p>
                  <span>Ano:</span> {jogo.game_year}
                </p>
                <p>
                  <span>Gênero:</span> {jogo.genre}
                </p>
                <p>
                  <span>Descrição Completa:</span> 
                  <p>{jogo.long_description}</p>
                </p>
                <span>
                  <button
                    className={Styles.link}
                    onClick={(event) => handleTrailerClick(event, jogo.trailer_url)}
                  >
                    Assistir Trailer
                  </button>
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
      
      {showVideo && expandedIndex !== null && (
  <div className={Styles.video_player}>
    <button className={Styles.close_button} onClick={handleCloseClick}>
      Fechar
    </button>
    <iframe
      title="Trailer"
      width="50%"
      height="50%"
      src={jogos[expandedIndex]?.trailer_url.replace("watch?v=", "embed/")}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  </div>
)}
    </section>
  );
}

export default JogosCard;
