import React from 'react';
import style from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={style.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={style.paginationButton}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${style.paginationButton} ${currentPage === page && style.active}`}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={style.paginationButton}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;