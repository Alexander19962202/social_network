import React, {useState} from 'react'
// @ts-expect-error TS(2307): Cannot find module './Paginator.module.css' or its... Remove this comment to see the full error message
import styles from './Paginator.module.css'
import cn from "classnames";

let Paginator = ({
    totalItemsCount,
    pageSize,
    currentItemsPage,
    on_currentPageChanged,
    pagesRange = 10
}: any) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let pagesPortionsCount = Math.ceil(pagesCount / pagesRange);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = Math.ceil((portionNumber - 1) * pagesRange + 1);
    let rightPortionPageNumber = Math.ceil(portionNumber * pagesRange);

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <div className={cn(styles.paginator)}>
        {
            portionNumber > 1 &&
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <button onClick={() => {
                setPortionNumber(portionNumber - 1);
                on_currentPageChanged(leftPortionPageNumber - pagesRange);
            }}>PREV</button>
        }
        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    return (<span className={ cn({[styles.activePage]: currentItemsPage === p}, styles.pageNumber) }
                                  key={p}
                                  onClick={(e) => {
                                      on_currentPageChanged(p);
                                  }}>{p}</span>)
                })
        }
        {
            portionNumber < pagesPortionsCount &&
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <button onClick={() => {
                setPortionNumber(portionNumber + 1);
                on_currentPageChanged(leftPortionPageNumber + pagesRange);
            }}>NEXT</button>
        }
    </div>
};

export default Paginator;