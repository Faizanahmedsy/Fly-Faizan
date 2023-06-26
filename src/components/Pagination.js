import React from 'react'

const Pagination = ({ totalPost, postsPerPage, setCurrentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        pages.push(i);
    }


    return (
        <div>
            {
                pages.map((page, index) => {
                    return (
                    
                    
                    
                    
                    <button key={index}
                    onClick={() => {
                        setCurrentPage(page)
                    }}
                    
                    >{page}</button>

                    )
                })
            }
        </div>
    )
}

export default Pagination