import React, { useState } from 'react';
import axios from 'axios';
import style from './Form.module.css';

const CreateVideogameForm = () => {
  const platformsOptions = ['PlayStation 3', 'PC', 'Xbox 360', 'Linux', 'macOS', 'Xbox One'];
  const genresOptions = ['Action', 'Adventure', 'RPG', 'Strategy', 'Simulation', 'Sports'];

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    platforms: '',
    released: '',
    rating: '',
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: '',
    rating: '',
    genres: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      setErrors({
        ...errors,
        name: 'El nombre no puede contener símbolos especiales.',
      });
    } else {
      setErrors({
        ...errors,
        name: '',
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenreChange = (e) => {
    const { name, checked } = e.target;
    let updatedGenres;

    if (checked) {
      // Si está marcado, agrega el género a la lista
      updatedGenres = [...formData.genres, name];
    } else {
      // Si no está marcado, elimina el género de la lista
      updatedGenres = formData.genres.filter((genre) => genre !== name);
    }

    setFormData({
      ...formData,
      genres: updatedGenres,
    });

    setErrors({
      ...errors,
      genres: updatedGenres.length > 3 ? 'Solo puedes seleccionar hasta 3 géneros.' : '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/videogames', {
        ...formData,
        // recorda el cambio de 'genres' a 'genre' para que coincida con el nombre esperado en el backend
        genre: formData.genres,
      });
      console.log(response.data);
      // una vez que sale bien me manda nuevmante a home para verlo
      window.location.href = '/home';
    } catch (error) {
      console.error('Error al crear el videojuego:', error.message);
    }
  };

  return (
    <div className={style['container-form']}>
      <h2 className={style['title-form']}>CREATE NEW GAME</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <div>
          <label>NAME:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className={style['error-message']}>{errors.name}</p>}
        </div>
        <div>
          <label>IMAGE:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <div>
          <label>DESCRIPTION</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>PLATAFORMS:</label>
          <select name="platforms" value={formData.platforms} onChange={handleChange}>
            <option value="" disabled>
              Selecciona una plataforma
            </option>
            {platformsOptions.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>RELASED:</label>
          <input type="text" name="released" value={formData.released} onChange={handleChange} />
        </div>
        <div>
          <label>RATING</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="10"
            step="0.1"
          />
        </div>
        <div>
          <label>GENRES:</label>
          {/*revisar la posibilidad de mapear el estado */}
          {genresOptions.map((genre) => (
            <div key={genre}>
              <input
                type="checkbox"
                name={genre}
                checked={formData.genres.includes(genre)}
                onChange={handleGenreChange}
              />
              <label>{genre}</label>
            </div>
          ))}
          {errors.genres && <p className={style['error-message']}>{errors.genres}</p>}
        </div>
        <div>
          <button type="submit">CREATE GAME</button>
        </div>
      </form>
    </div>
  );
};

export default CreateVideogameForm;