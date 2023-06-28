import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './Home';

const FlightDetailsPage = ({ selectedFlight }) => {
    const params = useParams();


    const currentPosts = useContext(UserContext);
    // console.log(currentPosts)//Undefined ❌


    // const selectedFlight = currentPosts.find((flight) => flight.id === params.id);

    console.log(selectedFlight)

    // useEffect(() => {
    //     // You can perform any necessary actions or fetch additional flight details here
    //     // For example, you can fetch more data based on the params.id
    // }, [params.id]);

    return (
        <>
            {selectedFlight ? (
                <div key={params.id}>
                    <h1>Flight Details</h1>
                    <p>Name: {selectedFlight.name}</p>
                    <p>Country: {selectedFlight.country}</p>
                    <p>Head Quarters: {selectedFlight.head_quarters}</p>
                    <p>Established: {selectedFlight.established}</p>
                    <p>Website: {selectedFlight.website}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default FlightDetailsPage;
