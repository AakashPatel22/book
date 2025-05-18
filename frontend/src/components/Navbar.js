// import { useNavigate } from 'react-router-dom';

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-blue-600 p-4 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Bookify</h1>
//         <div className="space-x-4">
//           <a href="/" className="hover:underline">Home</a>
//           {token ? (
//             <>
//               <a href="/bookings" className="hover:underline">Bookings</a>
//               <button onClick={handleLogout} className="hover:underline">Logout</button>
//             </>
//           ) : (
//             <>
//               <a href="/register" className="hover:underline">Register</a>
//               <a href="/login" className="hover:underline">Login</a>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
  <img src="/ticket_logo.jpg" alt="Bookify Logo" className="h-12 w-16 object-contain" />
  <h1 className="text-2xl font-bold">Bookify</h1>
</div>

        <div className="space-x-6">
          <a href="/" className="hover:underline">Home</a>
          {token ? (
            <>
              <a href="/bookings" className="hover:underline">Bookings</a>
              <button onClick={handleLogout} className="hover:underline">Logout</button>
            </>
          ) : (
            <>
              <a href="/register" className="hover:underline">Register</a>
              <a href="/login" className="hover:underline">Login</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
