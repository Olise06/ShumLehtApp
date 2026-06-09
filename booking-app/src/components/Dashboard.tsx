import React from 'react';

const Dashboard: React.FC = () => {
    // Sample data for bookings overview
    const bookings = [
        { id: 1, name: 'John Doe', date: '2023-10-01', status: 'Confirmed' },
        { id: 2, name: 'Jane Smith', date: '2023-10-02', status: 'Pending' },
        { id: 3, name: 'Alice Johnson', date: '2023-10-03', status: 'Cancelled' },
    ];

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Overview of Bookings</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.name}</td>
                            <td>{booking.date}</td>
                            <td>{booking.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;