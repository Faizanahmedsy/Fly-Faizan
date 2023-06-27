import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from './Home';

const FlightDetailsPage = () => {
    const { flightId } = useParams(); // Get the flightId from the URL parameter
    const currentPosts = useContext(UserContext);

    // Find the selected flight by the flightId
    const selectedFlight = currentPosts.find((flight) => flight.id === flightId);

    useEffect(() => {
        // You can perform any necessary actions or fetch additional flight details here
        // For example, you can fetch more data based on the flightId
    }, [flightId]);

    return (
        <>
            {selectedFlight ? (
                <div>
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
