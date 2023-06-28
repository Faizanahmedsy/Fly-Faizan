import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlightList from './FlightList';
import PageChange from './PageChange';
import { createContext } from 'react';
export const UserContext = createContext();


const Home = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);


    const API = 'https://api.instantwebtools.net/v1/airlines';



    useEffect(() => {
        axios.get(API).then((response) => {
            setData(response.data);
            // console.log(response.data);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            setIsLoading(false);
        })
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data ? data.slice(indexOfFirstPost, indexOfLastPost) : [];
    const totalPosts = data ? data.length : 0;

    return (
        <>
            <UserContext.Provider value={currentPosts}>

                <FlightList data={currentPosts} isLoading={isLoading} />
                <PageChange totalPost={totalPosts} postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage} currentPage={currentPage}
                />
            </UserContext.Provider>
        </>
    );
}

export default Home;
