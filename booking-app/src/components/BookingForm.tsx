import React, { useState } from 'react';
import { createBooking } from '../services/api';

const BookingForm: React.FC = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!name || !date || !time || guests < 1) {
            setError('Please fill in all fields correctly.');
            return;
        }

        try {
            await createBooking({ name, date, time, guests });
            // Reset form fields after successful submission
            setName('');
            setDate('');
            setTime('');
            setGuests(1);
        } catch (err) {
            setError('Failed to create booking. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Booking Form</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label>Time:</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <div>
                <label>Number of Guests:</label>
                <input type="number" value={guests} onChange={(e) => setGuests(Number(e.target.value))} min="1" required />
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;