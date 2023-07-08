import cn from 'classnames';
import React, { useState } from 'react';

import styles from 'src/ui/common/components/paginator/paginator.module.scss';

type PaginatorProps = {
  totalItemsCount: number;
  pageSize: number;
  currentItemsPage?: number;
  onCurrentPageChanged?: (pageNumber: number) => void;
  pagesRange?: number;
};

const Paginator: React.FC<PaginatorProps> = ({
  totalItemsCount,
  pageSize,
  currentItemsPage = 1,
  onCurrentPageChanged = (_: number) => {},
  pagesRange = 10,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const pagesPortionsCount = Math.ceil(pagesCount / pagesRange);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = Math.ceil((portionNumber - 1) * pagesRange + 1);
  const rightPortionPageNumber = Math.ceil(portionNumber * pagesRange);

  return (
    <div className={cn(styles.paginator)}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
            onCurrentPageChanged(leftPortionPageNumber - pagesRange);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => (
          <span
            className={cn({ [styles.paginator__activePage]: currentItemsPage === p }, styles.paginator__pageNumber)}
            key={p}
            onClick={() => {
              onCurrentPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      {portionNumber < pagesPortionsCount && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
            onCurrentPageChanged(leftPortionPageNumber + pagesRange);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
