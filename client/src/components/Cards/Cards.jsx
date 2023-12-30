import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './Cards.module.css';

function Cards(props) {

  const {allVideogames} = props;

 
  return (
    <div className={style.cardList}>
      {
        allVideogames?.map((game)=>(
        <Card key={game.id} game={game}/>))
      }
    </div>
  );
}

export default Cards;


//Mariano TOrres