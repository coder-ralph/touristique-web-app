import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Pagination = ({ totalPage }) => {
  const { search } = useLocation();
  const [pageNumbers, setPageNumbers] = useState([]);
  const page = Number(new URLSearchParams(search).get('page')) || 1;

  // Scroll to the top of the page whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    if (totalPage <= 1) return;

    if (totalPage <= 5) {
      const newArr = [...Array(totalPage)].map((_, i) => i + 1);
      return setPageNumbers(newArr);
    }
    // totalPage > 5
    let newArr = [];

    for (let index = 1; index <= 5; index++) {
      if (page <= 2) {
        newArr.push(index);
      }

      if (page > 2 && page < totalPage - 2) {
        newArr.push(page + index - 3);
      }

      if (page >= totalPage - 2) {
        newArr.push(index - 5 + totalPage);
      }
    }

    setPageNumbers(newArr);
  }, [totalPage, page]);

  if (totalPage <= 1) return null;
  return (
    <div className='pagination'>
      {page !== 1 && (
        <Link
          to={`?page=${page - 1 <= 1 ? 1 : page - 1}`}
          className="prev-next"
        >
          <i className='fa-solid fa-arrow-left' /> Prev
        </Link>
      )}

      <ul className="numbers">
        {pageNumbers.map(num => (
          <Link to={`?page=${num}`} key={num}>
            <li className={page === num ? 'active' : ''}>{num}</li>
          </Link>
        ))}
      </ul>

      {page !== totalPage && (
        <Link
          to={`?page=${page + 1 >= totalPage ? totalPage : page + 1}`}
          className="prev-next"
        >
          Next <i className='fa-solid fa-arrow-right' />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
