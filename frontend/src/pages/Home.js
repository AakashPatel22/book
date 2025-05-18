// import { useState, useEffect } from 'react';
// import api from '../api';
// import MovieCard from '../components/MovieCard';

// function Home() {
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const res = await api.get('http://localhost:3002/api/movies');
//         setMovies(res.data);
//       } catch (err) {
//         setError('Failed to fetch movies');
//       }
//     };
//     fetchMovies();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Movies</h1>
//       {error && <p className="text-red-500">{error}</p>}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useState, useEffect } from 'react';
import api from '../api';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await api.get('/api/movies'); //http://localhost:3002/api/movies
        setMovies(res.data);
      } catch (err) {
        setError('Failed to fetch movies');
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
