import style from './Card.module.css';

function Card({game}) {
console.log(game)

  return (
    <div className={style.card}>
      <img className={style.img} src={game.image} alt={game.name}/>
      <h2 className={style.h2}>{game.name}</h2>
      <h2 className={style.h2}>{game.genres}</h2>
    </div>
    
  );
}

export default Card;