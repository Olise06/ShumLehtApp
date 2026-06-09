import { Request, Response } from 'express';
import Booking from '../models/bookingModel';

class BookingController {
    async createBooking(req: Request, res: Response) {
        try {
            const bookingData = req.body;
            const newBooking = await Booking.create(bookingData);
            res.status(201).json(newBooking);
        } catch (error) {
            res.status(500).json({ message: 'Error creating booking', error });
        }
    }

    async getBookings(req: Request, res: Response) {
        try {
            const bookings = await Booking.find();
            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving bookings', error });
        }
    }

    async getBookingById(req: Request, res: Response) {
        try {
            const bookingId = req.params.id;
            const booking = await Booking.findById(bookingId);
            if (!booking) {
                return res.status(404).json({ message: 'Booking not found' });
            }
            res.status(200).json(booking);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving booking', error });
        }
    }

    async updateBooking(req: Request, res: Response) {
        try {
            const bookingId = req.params.id;
            const updatedBooking = await Booking.findByIdAndUpdate(bookingId, req.body, { new: true });
            if (!updatedBooking) {
                return res.status(404).json({ message: 'Booking not found' });
            }
            res.status(200).json(updatedBooking);
        } catch (error) {
            res.status(500).json({ message: 'Error updating booking', error });
        }
    }

    async deleteBooking(req: Request, res: Response) {
        try {
            const bookingId = req.params.id;
            const deletedBooking = await Booking.findByIdAndDelete(bookingId);
            if (!deletedBooking) {
                return res.status(404).json({ message: 'Booking not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting booking', error });
        }
    }
}

export default new BookingController();