import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Home = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const API = 'https://api.instantwebtools.net/v1/airlines';

    const fetchApi = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            console.log(json);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }




    useEffect(() => {
        fetchApi(API);


    }, [])

    // console.log(data)//faizans personal debugger :D


    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {!isLoading && data && data.map((item) => {
                return (
                    <div key={item.id}>
                        <Table striped bordered hover>
                            <thead>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Head Quaters</th>
                                <th>Established</th>
                                <th>Website</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item.name}</td>
                                {/* </tr> */}
                                {/* <tr> */}
                                    <td>{item.country}</td>
                                {/* </tr> */}
                                {/* <tr> */}
                                    <td>{item.head_quaters}</td>
                                {/* </tr>
                                <tr> */}
                                <td>{item.established}</td>
                                {/* </tr>
                                <tr> */}
                                <td>{item.website}</td>
                                </tr>
                            {/* </tr> */}
                        </tbody>
                    </Table>
                    </div >
                )
            })
            }

        </>
    )
}
export default Home