import Card from '../Card/Card';
import style from './Cards.module.css';
import {Link} from 'react-router-dom'

function Cards(props) {

  const {allVideogames} = props;

  return (
    <div className={style.cardList}>
      {
        allVideogames?.map((game)=>(
          <Link key={game.id} to={`/home/${game.id}`}>
          <Card game={game} />
        </Link>
      ))}
    </div>
  );
}

export default Cards;


//Mariano TOrres