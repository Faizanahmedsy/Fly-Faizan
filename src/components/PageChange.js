import React from 'react'
import { Pagination } from 'antd';

const PageChange = ({ totalPost, postsPerPage, setCurrentPage, currentPage }) => {
    let pages = [];
    console.log(totalPost);
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }
    // for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    //     pages.push(i);
    // }
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Pagination defaultCurrent={6} total={500} onChange={handlePageChange}
                current={currentPage} />;
            {/* {pages.map((page, index) => {
                return (
                    <>
                        <button className='btn btn-dark' key={index}
                            onClick={() => { setCurrentPage(page) }}>{page}</button>
                    </>
                )
            })} */}
        </div>
    )
}

export default PageChange