import React, {useState} from 'react'
import styles from './paginator.module.css'
import cn from "classnames";

type PaginatorProps = {
  totalItemsCount: number
  pageSize: number
  currentItemsPage?: number
  on_currentPageChanged?: (pageNumber: number) => void
  pagesRange?: number
}

let Paginator: React.FC<PaginatorProps> = ({
                                             totalItemsCount,
                                             pageSize,
                                             currentItemsPage,
                                             on_currentPageChanged = (_: number) => {},
                                             pagesRange = 10
                                           }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let pagesPortionsCount = Math.ceil(pagesCount / pagesRange);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = Math.ceil((portionNumber - 1) * pagesRange + 1);
  let rightPortionPageNumber = Math.ceil(portionNumber * pagesRange);

  return <div className={cn(styles.paginator)}>
    {
      portionNumber > 1 &&
      <button onClick={() => {
        setPortionNumber(portionNumber - 1);
        on_currentPageChanged(leftPortionPageNumber - pagesRange);
      }}>PREV</button>
    }
    {
      pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return (<span className={cn({[styles.activePage]: currentItemsPage === p}, styles.pageNumber)}
                        key={p}
                        onClick={() => {
                          on_currentPageChanged(p);
                        }}>{p}</span>)
        })
    }
    {
      portionNumber < pagesPortionsCount &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1);
        on_currentPageChanged(leftPortionPageNumber + pagesRange);
      }}>NEXT</button>
    }
  </div>
};

export default Paginator;
