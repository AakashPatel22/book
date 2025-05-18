// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api';

// function Bookings() {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     const fetchBookings = async () => {
//       try {
//         const res = await api.get('http://localhost:3003/api/bookings/1'); // Hardcoded userId
//         setBookings(Array.isArray(res.data) ? res.data : [res.data]);
//       } catch (err) {
//         setError('Failed to fetch bookings');
//       }
//     };
//     fetchBookings();
//   }, [navigate]);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Your Bookings</h1>
//       {error && <p className="text-red-500">{error}</p>}
//       {bookings.length === 0 ? (
//         <p>No bookings found</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-4">
//           {bookings.map((booking) => (
//             <div key={booking.id} className="bg-white rounded-lg shadow-md p-4">
//               <p>Booking ID: {booking.id}</p>
//               <p>Showtime ID: {booking.showtimeId}</p>
//               <p>Seats Booked: {booking.seatsBooked}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Bookings;

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api';

// function Bookings() {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     const decodedToken = JSON.parse(atob(token.split('.')[1]));
//     const userId = decodedToken?.id;


//     const fetchBookings = async () => {
//       try {
        
//         const res = await api.get(`http://localhost:3003/api/bookings/${userId}`); // Hardcoded userId
//         setBookings(Array.isArray(res.data) ? res.data : [res.data]);
//       } catch (err) {
//         setError('Failed to fetch bookings');
//       }
//     };
//     fetchBookings();
//   }, [navigate]);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Your Bookings</h1>
//       {error && <p className="text-red-500">{error}</p>}
//       {bookings.length === 0 ? (
//         <p className="text-gray-600">No bookings found</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {bookings.map((booking) => (
//             <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
//               <p className="text-gray-700 font-semibold">Booking ID: {booking.id}</p>
//               <p className="text-gray-600">Showtime ID: {booking.showtimeId}</p>
//               <p className="text-gray-600">Seats Booked: {booking.seatsBooked}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Bookings;

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const userId = decodedToken?.id;

    const fetchBookings = async () => {
      try {
        const res = await api.get(`/api/bookings/${userId}`); //http://localhost:3003/api/bookings/${userId}
        const rawBookings = Array.isArray(res.data) ? res.data : [res.data];

        // Fetch showtime and movie details for each booking
        const enrichedBookings = await Promise.all(
          rawBookings.map(async (booking) => {
            try {
              const showtimeRes = await api.get(`/api/showtimes/${booking.showtimeId}`); //http://localhost:3004/api/showtimes/${booking.showtimeId}
              const showtime = showtimeRes.data;

              const movieRes = await api.get(`/api/movies/${showtime.movieId}`); //http://localhost:3002/api/movies/${showtime.movieId}
              const movie = movieRes.data;

              return {
                ...booking,
                showTime: showtime.showTime,
                movieName: movie.title,
              };
            } catch (err) {
              console.error('Failed to fetch showtime or movie', err);
              return booking; // fallback
            }
          })
        );

        setBookings(enrichedBookings);
      } catch (err) {
        setError('Failed to fetch bookings');
      }
    };

    fetchBookings();
  }, [navigate]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Bookings</h1>
      {error && <p className="text-red-500">{error}</p>}
      {bookings.length === 0 ? (
        <p className="text-gray-600">No bookings found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 font-semibold">Booking ID: {booking.id}</p>
              <p className="text-gray-600">Movie: {booking.movieName || 'Loading...'}</p>
              <p className="text-gray-600">Showtime: {booking.showTime || 'Loading...'}</p>
              <p className="text-gray-600">Seats Booked: {booking.seatsBooked}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;

