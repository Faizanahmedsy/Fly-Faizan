import React, { useEffect, useState } from 'react';
import FlightList from './FlightList';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import { createContext } from 'react';
import Pagination from './Pagination';

export const UserContext = createContext();

//This component is used for fetching api and passing data to FlightList component

const Home = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const API = 'https://api.instantwebtools.net/v1/airlines';

    // const fetchApi = async (url) => {
    //     try {
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         setData(json);
    //         console.log(json);
    //         setIsLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //         setIsLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchApi(API);
    // }, [])

    useEffect(() => {

        axios.get(API).then((response) => {
            // console.log(response.data);
            setData(response.data);
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
                <ProgressBar now={20} />
                <FlightList data={currentPosts} isLoading={isLoading} />
                <Pagination totalPost={totalPosts} postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                />
            </UserContext.Provider>
        </>
    );
}

export default Home;
