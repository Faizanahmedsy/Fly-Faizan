import React, { useEffect, useState, useContext } from 'react';
// import Table from 'react-bootstrap/Table';
import { UserContext } from './Home';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import FlightDetailsPage from './FlightDetailsPage';



const FlightList = ({ isLoading }) => {

    const currentPosts = useContext(UserContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);

    const handelViewClick = (flight) => {
        setSelectedFlight(flight);
        setShowModal(true)
    }

    return (
        <>
            {isLoading && <h2>Wait ✋ data is on the way...</h2>}
            <section className="table_body">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Head Quarters</th>
                            <th>Established</th>
                            <th>Website</th>
                            <th>More Details</th>
                            <th>Action</th>
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
                                <td>
                                    <button className="btn btn-warning"
                                        onClick={() => {
                                            console.log(item);

                                            return (
                                                handelViewClick(item)
                                            )
                                        }} >View
                                    </button>
                                </td>
                                <td><Link to={"/airlines/:" + item.id}>CLick me</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {
                showModal && selectedFlight && (
                    <div key={selectedFlight.id}
                        className="modal show"
                        style={{ display: 'block', position: 'initial' }}
                    >
                        <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Modal.Title>{selectedFlight.name}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>{selectedFlight.country}</p>
                            </Modal.Body>
                            <Modal.Body>
                                <p>{selectedFlight.head_quaters}</p>
                            </Modal.Body>
                            <Modal.Body>
                                <p>{selectedFlight.established}</p>
                            </Modal.Body>
                            <Modal.Body>
                                <p>{selectedFlight.website}</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary">Close</Button>
                                <Button variant="primary">Save changes</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                )
            }
            {/* <FlightDetailsPage data={currentPosts} /> */}


        </>
    );
}

export default FlightList;
