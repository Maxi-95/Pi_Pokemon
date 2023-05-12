import React from "react";
import s from "./Pagination.module.css"

const Pagination = ({totalPost, postsPerPage, setCurrentPage, currentPage}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
       pages.push(i); 
    }

    return (
        <div>
        <div className={s.pagination }>
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)} className=
                    {page === currentPage ? 'active' : ''}>{page}</button>
                })
            }
        </div>

        </div>
    )
}

export default Pagination;