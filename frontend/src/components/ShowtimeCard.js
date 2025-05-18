// function ShowtimeCard({ showtime }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-4">
//       <p className="text-gray-600">Showtime: {new Date(showtime.showTime).toLocaleString()}</p>
//       <p className="text-gray-600">Available Seats: {showtime.availableSeats}</p>
//     </div>
//   );
// }

// export default ShowtimeCard;

function ShowtimeCard({ showtime }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md transition-all hover:scale-105">
      <p className="text-gray-700">Showtime: {new Date(showtime.showTime).toLocaleString()}</p>
      <p className="text-gray-600">Available Seats: {showtime.availableSeats}</p>
    </div>
  );
}

export default ShowtimeCard;
