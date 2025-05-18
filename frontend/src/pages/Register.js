// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import api from '../api';

// // function Register() {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await api.post('http://localhost:3001/api/user/register', {
// //         username,
// //         password,
// //         role: 'USER',
// //       });
// //       setSuccess('Registration successful! Redirecting to login...');
// //       setError('');
// //       setTimeout(() => navigate('/login'), 2000);
// //     } catch (err) {
// //       setError(err.response?.data?.message || 'Registration failed');
// //       setSuccess('');
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto">
// //       <h1 className="text-3xl font-bold mb-4">Register</h1>
// //       <div className="bg-white rounded-lg shadow-md p-4">
// //         <input
// //           type="text"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           placeholder="Username"
// //           className="border p-2 rounded w-full mb-2"
// //         />
// //         <input
// //           type="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="Password"
// //           className="border p-2 rounded w-full mb-2"
// //         />
// //         <button
// //           onClick={handleSubmit}
// //           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
// //         >
// //           Register
// //         </button>
// //         {error && <p className="text-red-500 mt-2">{error}</p>}
// //         {success && <p className="text-green-500 mt-2">{success}</p>}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Register;
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api';

// function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post('http://localhost:3001/api/user/register', {
//         username,
//         password,
//         role: 'USER',
//       });
//       setSuccess('Registration successful! Redirecting to login...');
//       setError('');
//       setTimeout(() => navigate('/login'), 2000);
//     } catch (err) {
//       setError(err.response?.data?.message || 'Registration failed');
//       setSuccess('');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             placeholder="Username"
//             className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         </form>
//         {error && <p className="text-red-500 mt-3">{error}</p>}
//         {success && <p className="text-green-500 mt-3">{success}</p>}
//       </div>
//     </div>
//   );
// }

// export default Register;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/user/register', {  //http://localhost:3001/api/user/register
        username,
        password,
        role: 'USER',
      });
      setSuccess('Registration successful! Redirecting to login...');
      setError('');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2 rounded w-full mb-4"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 rounded w-full mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full transition"
        >
          Register
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
    </div>
  );
}

export default Register;
