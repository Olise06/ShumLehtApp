import React, { useEffect, useState } from 'react';
import { getReservations } from '../services/api';

const Reservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            const data = await getReservations();
            setReservations(data);
        };

        fetchReservations();
    }, []);

    const handleDelete = async (id) => {
        // Logic to delete a reservation
    };

    return (
        <div>
            <h1>Your Reservations</h1>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>
                        {reservation.details}
                        <button onClick={() => handleDelete(reservation.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reservations;