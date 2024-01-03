import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Pagination from '../pagination/Pagination';
import style from './Cards.module.css';
import { Link } from 'react-router-dom';

function Cards() {
  const videogames = useSelector((state) => state.videogames);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVideogames = videogames?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(videogames.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={style.cardList}>
        {currentVideogames?.map((game) => (
          <Link key={game.id} to={`/home/${game.id}`}>
            <Card game={game} />
          </Link>
        ))}
      </div>
      <div className={style.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Cards;