import React, { useEffect, useState,useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { UserContext } from './Home';

const FlightList = ({isLoading}) => {

    const currentPosts = useContext(UserContext);


    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            <Table striped bordered hover responsive="sm" className="custom-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Head Quarters</th>
                        <th>Established</th>
                        <th>Website</th>
                    </tr>
                </thead>

                <tbody>
                    {!isLoading && currentPosts && currentPosts.length > 0 && currentPosts.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.country}</td>
                            <td>{item.head_quaters}</td>
                            <td>{item.established}</td>
                            <td>{item.website}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </>
    );
}

export default FlightList;
