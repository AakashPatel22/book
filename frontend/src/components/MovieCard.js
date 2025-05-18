// import { Link } from 'react-router-dom';

// function MovieCard({ movie }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4">
//       <h2 className="text-xl font-bold">{movie.title}</h2>
//       <p className="text-gray-600">{movie.description}</p>
//       <p className="text-gray-600">Duration: {movie.duration} min</p>
//       <p className="text-gray-600">Rating: {movie.rating}</p>
//       <Link to={`/movie/${movie.id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//         View Showtimes
//       </Link>
//     </div>
//   );
// }

// export default MovieCard;

import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
      <h2 className="text-xl font-semibold text-gray-900">{movie.title}</h2>
      <p className="text-gray-700 mb-2">{movie.description}</p>
      <p className="text-gray-600">Duration: {movie.duration} min</p>
      <p className="text-gray-600 mb-3">Rating: {movie.rating}</p>
      <Link 
        to={`/movies/${movie.id}`} 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg block text-center hover:bg-blue-700 transition"
      >
        View Showtimes
      </Link>
    </div>
  );
}

export default MovieCard;
