import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './Cards.module.css';
import {Link} from 'react-router-dom'

function Cards() {

  const videogames = useSelector((state)=>state.videogames)

  return (
    <div className={style.cardList}>
      {
        videogames?.map((game)=>(
          <Link key={game.id} to={`/home/${game.id}`}>
          <Card game={game} />
        </Link>
      ))}
    </div>
  );
}

export default Cards;