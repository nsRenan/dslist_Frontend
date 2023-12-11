import React, { useState } from 'react';
import Styles from './cadastrar.module.css'


function Atualizar (){
    const [formData, setFormData] = useState({
        title: '',
        score: '',
        game_year: '',
        genre: '',
        platforms: '',
        img_url: '',
        short_description: '',
        long_description: '',
        trailer_url: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(formData, null, 2));
        return JSON.stringify(formData, null, 2);
      };
    
      return (
        <div className={Styles.container}>
          <div className={Styles.box}>
            <h2>Cadastrar Jogo</h2>
            <form onSubmit={handleSubmit} className={Styles.form}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Titulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Titulo"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="score" className="form-label">
                  Nota
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="score"
                  name="score"
                  placeholder="Nota"
                  value={formData.score}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="game_year" className="form-label">
                  Ano Lancamento
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="game_year"
                  name="game_year"
                  placeholder="Ano Lanc."
                  value={formData.game_year}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="genre" className="form-label">
                  Genero
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  name="genre"
                  placeholder="Genero"
                  value={formData.genre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="platforms" className="form-label">
                  Plataformas
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="platforms"
                  name="platforms"
                  placeholder="Plataformas"
                  value={formData.platforms}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="img_url" className="form-label">
                  Imagem URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="img_url"
                  name="img_url"
                  placeholder="URL Capa"
                  value={formData.img_url}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="trailer_url" className="form-label">
                  Trailer URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="trailer_url"
                  name="trailer_url"
                  placeholder="URL Trailer"
                  value={formData.trailer_url}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="short_description" className="form-label">
                  Descrição Curta
                </label>
                <textarea
                  className="form-control"
                  id="short_description"
                  name="short_description"
                  rows="2"
                  placeholder="Descrição Curta"
                  value={formData.short_description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="long_description" className="form-label">
                  Descrição Longa
                </label>
                <textarea
                  className="form-control"
                  id="long_description"
                  name="long_description"
                  rows="4"
                  placeholder="Descrição Longa"
                  value={formData.long_description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className={Styles.btn_primary}>
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      );
}

export default Atualizar