// import {useState} from 'react';



// // totalPost = 13913;
// // postsPerPage = 10;
// const usePageHook = (postsPerPage, totalPost) => {


//     const totalPages = Math.ceil(totalPost / postsPerPage);
//     // totalPages = 1392;

//     const [startPageIndex, setStartPageIndex ] = useState(0);
//     const [endPageIndex, setEndPageIndex ] = useState(startPageIndex - 1); 
//     const [currentPage, setCurrentPage] = useState(1);


//     const displayPages = () => {
//         setCurrentPage(pageNo);
//         let end_page_index = (postsPerPage  * pageNo) - 1;
//         let start_page_index = (postsPerPage * pageNo) - postsPerPage
//         setStartPageIndex(start_page_index);


//         if (end_page_index > totalPost) {
//             setEndPageIndex(totalPost - 1);
//         }
//         else {
//             setEndPageIndex(end_page_index);
//         }
        
// }


// return [startPageIndex, endPageIndex, currentPage, displayPages, totalPages];

// }


// export default usePageHook;