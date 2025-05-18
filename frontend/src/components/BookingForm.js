// import { useState } from 'react';
// import api from '../api';

// function BookingForm({ showtimeId, onBookingSuccess }) {
//   const [seats, setSeats] = useState(1);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('http://localhost:3003/api/bookings', {
//         userId: 1, // Hardcoded; replace with dynamic user ID if available
//         showtimeId,
//         seatsBooked: seats,
//       });
//       setSuccess('Booking successful!');
//       setError('');
//       onBookingSuccess();
//     } catch (err) {
//       setError(err.response?.data?.message || 'Booking failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="mt-4">
//       <h3 className="text-lg font-bold">Book Seats</h3>
//       <div className="max-w-xs">
//         <input
//           type="number"
//           min="1"
//           value={seats}
//           onChange={(e) => setSeats(Number(e.target.value))}
//           className="border p-2 rounded w-full"
//           placeholder="Number of seats"
//         />
//         <button
//           onClick={handleSubmit}
//           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Book Now
//         </button>
//       </div>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//       {success && <p className="text-green-500 mt-2">{success}</p>}
//     </div>
//   );
// }

// export default BookingForm;
import { useState } from 'react';
import api from '../api';

function BookingForm({ showtimeId, onBookingSuccess }) {
  const [seats, setSeats] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Decode the JWT token to get the user ID
  const token = localStorage.getItem('token');
  const decodedToken = token ? JSON.parse(atob(token.split('.')[1])) : null;
  const userId = decodedToken?.id;  // This is the user ID from the token

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/bookings', { //http://localhost:3003/api/bookings
        userId,
        showtimeId,
        seatsBooked: seats,
      });
      setSuccess('Booking successful!');
      setError('');
      onBookingSuccess();
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed');
      setSuccess('');
    }
  };

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Book Your Seats</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          min="1"
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter number of seats"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Book Now
        </button>
      </form>
      {error && <p className="text-red-500 mt-3">{error}</p>}
      {success && <p className="text-green-500 mt-3">{success}</p>}
    </div>
  );
}

export default BookingForm;
