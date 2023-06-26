import React from 'react'

const Pagination = ({ totalPost, postsPerPage, setCurrentPage }) => {
    let pages = [];
    // console.log(totalPost);
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }
    // for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    //     pages.push(i);
    // }




    return (
        <div>
            {pages.map((page, index) => {
                return (
                    <>
                        {/* <button onClick={()=> getPrevPage()}>Prev</button> */}
                        <button key={index}
                            onClick={() => { setCurrentPage(page) }}>{page}</button>
                        {/* <button onClick={()=> getNextPage()}>Next</button> */}
                    </>
                )
            })}
        </div>
    )
}

export default Pagination