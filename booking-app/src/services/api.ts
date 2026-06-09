import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bookings';

export const createBooking = async (bookingData) => {
    try {
        const response = await axios.post(API_URL, bookingData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating booking: ' + error.message);
    }
};

export const getBookings = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching bookings: ' + error.message);
    }
};

export const updateBooking = async (bookingId, bookingData) => {
    try {
        const response = await axios.put(`${API_URL}/${bookingId}`, bookingData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating booking: ' + error.message);
    }
};

export const deleteBooking = async (bookingId) => {
    try {
        await axios.delete(`${API_URL}/${bookingId}`);
    } catch (error) {
        throw new Error('Error deleting booking: ' + error.message);
    }
};