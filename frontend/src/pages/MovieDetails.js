// // import { useState, useEffect } from 'react';
// // import { useParams } from 'react-router-dom';
// // import api from '../api';
// // import ShowtimeCard from '../components/ShowtimeCard';
// // import BookingForm from '../components/BookingForm';

// // function MovieDetails() {
// //   const { id } = useParams();
// //   const [movie, setMovie] = useState(null);
// //   const [showtimes, setShowtimes] = useState([]);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchMovie = async () => {
// //       try {
// //         const movieRes = await api.get(`http://localhost:3002/api/movies/${id}`);
// //         console.log(movieRes);
// //         setMovie(movieRes.data);
// //         const showtimesRes = await api.get('http://localhost:3004/api/showtimes');
// //         setShowtimes(showtimesRes.data.filter((st) => st.movieId === Number(id)));
// //       } catch (err) {
// //         setError('Failed to fetch movie or showtimes');
// //       }
// //     };
// //     fetchMovie();
// //   }, [id]);

// //   const handleBookingSuccess = () => {
// //     const fetchShowtimes = async () => {
// //       try {
// //         const showtimesRes = await api.get('http://localhost:3004/api/showtimes');
// //         setShowtimes(showtimesRes.data.filter((st) => st.movieId === Number(id)));
// //       } catch (err) {
// //         setError('Failed to refresh showtimes');
// //       }
// //     };
// //     fetchShowtimes();
// //   };

// //   if (!movie) return <p>Loading...</p>;

// //   return (
// //     <div>
// //       <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
// //       {error && <p className="text-red-500">{error}</p>}
// //       <p className="text-gray-600">{movie.description}</p>
// //       <p className="text-gray-600">Duration: {movie.duration} min</p>
// //       <p className="text-gray-600">Rating: {movie.rating}</p>
// //       <h2 className="text-2xl font-bold mt-4">Showtimes</h2>
// //       {showtimes.length === 0 ? (
// //         <p>No showtimes available</p>
// //       ) : (
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           {showtimes.map((showtime) => (
// //             <div key={showtime.id}>
// //               <ShowtimeCard showtime={showtime} />
// //               <BookingForm showtimeId={showtime.id} onBookingSuccess={handleBookingSuccess} />
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default MovieDetails;
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../api';
// import ShowtimeCard from '../components/ShowtimeCard';
// import BookingForm from '../components/BookingForm';

// function MovieDetails() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [showtimes, setShowtimes] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const movieRes = await api.get(`http://localhost:3002/api/movies/${id}`);
//         setMovie(movieRes.data);
//         const showtimesRes = await api.get('http://localhost:3004/api/showtimes');
//         setShowtimes(showtimesRes.data.filter((st) => st.movieId === Number(id)));
//       } catch (err) {
//         setError('Failed to fetch movie or showtimes');
//       }
//     };
//     fetchMovie();
//   }, [id]);

//   const handleBookingSuccess = async () => {
//     try {
//       const showtimesRes = await api.get('http://localhost:3004/api/showtimes');
//       setShowtimes(showtimesRes.data.filter((st) => st.movieId === Number(id)));
//     } catch (err) {
//       setError('Failed to refresh showtimes');
//     }
//   };

//   if (!movie) return <p className="text-center text-gray-600">Loading...</p>;

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <p className="text-gray-700 mb-1">{movie.description}</p>
//       <p className="text-gray-600 mb-1">Duration: {movie.duration} min</p>
//       <p className="text-gray-600 mb-4">Rating: {movie.rating}</p>

//       <h2 className="text-2xl font-semibold mt-6 mb-3">Showtimes</h2>
//       {showtimes.length === 0 ? (
//         <p className="text-gray-500">No showtimes available</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {showtimes.map((showtime) => (
//             <div key={showtime.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
//               <ShowtimeCard showtime={showtime} />
//               <BookingForm showtimeId={showtime.id} onBookingSuccess={handleBookingSuccess} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default MovieDetails;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import ShowtimeCard from '../components/ShowtimeCard';
import BookingForm from '../components/BookingForm';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showtimes, setShowtimes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieRes = await api.get(`/api/movies/${id}`); //http://localhost:3002/api/movies/${id}
        setMovie(movieRes.data);
        const showtimesRes = await api.get('/api/showtimes'); //http://localhost:3004/api/showtimes
        setShowtimes(showtimesRes.data.filter((st) => st.movieId === Number(id)));
      } catch (err) {
        setError('Failed to fetch movie or showtimes');
      }
    };
    fetchMovie();
  }, [id]);

  const handleBookingSuccess = () => {
    const fetchShowtimes = async () => {
      try {
        const showtimesRes = await api.get('/api/showtimes'); //http://localhost:3004/api/showtimes
        setShowtimes(showtimesRes.data.filter((st) => st.movieId === Number(id)));
      } catch (err) {
        setError('Failed to refresh showtimes');
      }
    };
    fetchShowtimes();
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{movie.title}</h1>
      {error && <p className="text-red-500">{error}</p>}
      <p className="text-gray-700 mb-4">{movie.description}</p>
      <p className="text-gray-600 mb-4">Duration: {movie.duration} min</p>
      <p className="text-gray-600 mb-6">Rating: {movie.rating}</p>
      <h2 className="text-2xl font-semibold mb-4">Showtimes</h2>
      {showtimes.length === 0 ? (
        <p className="text-gray-600">No showtimes available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showtimes.map((showtime) => (
            <div key={showtime.id} className="bg-white rounded-lg shadow-md p-6">
              <ShowtimeCard showtime={showtime} />
              <BookingForm showtimeId={showtime.id} onBookingSuccess={handleBookingSuccess} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
