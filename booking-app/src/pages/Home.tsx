import React from 'react';
import BookingForm from '../components/BookingForm';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Booking App</h1>
            <p>Book your next adventure with us!</p>
            <BookingForm />
            <Dashboard />
        </div>
    );
};

export default Home;