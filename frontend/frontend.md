# Movie Booking Application

This React application provides a frontend for the movie ticket booking service. The application allows users to:

1. Register and login to the system
2. View all available movies
3. View movie details
4. View showtimes for movies
5. Book tickets for specific showtimes
6. View their bookings

## Project Structure

```
movie-booking-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── api/
│   │   ├── apiConfig.js
│   │   ├── authService.js
│   │   ├── movieService.js
│   │   ├── showtimeService.js
│   │   └── bookingService.js
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── PrivateRoute.js
│   │   │   ├── MovieCard.js
│   │   │   ├── Loader.js
│   │   │   └── ErrorMessage.js
│   │   ├── auth/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── movies/
│   │   │   ├── MoviesList.js
│   │   │   └── MovieDetail.js
│   │   ├── showtimes/
│   │   │   ├── ShowtimesList.js
│   │   │   └── ShowtimeDetail.js
│   │   └── bookings/
│   │       ├── BookingForm.js
│   │       └── BookingsList.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── MoviesPage.js
│   │   ├── MovieDetailPage.js
│   │   ├── BookingPage.js
│   │   └── ProfilePage.js
│   ├── utils/
│   │   ├── authUtils.js
│   │   └── dateUtils.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .env
├── package.json
└── README.md
```

## Key Features

- **Authentication**: JWT-based authentication with token storage in localStorage
- **Authorization**: Role-based access control (USER role)
- **Responsive Design**: Using modern CSS and flexbox/grid layouts
- **Error Handling**: Comprehensive error handling throughout the application
- **Form Validation**: Client-side validation for user inputs
- **Loading States**: Visual indicators for API operations
- **Private Routes**: Protected routes requiring authentication

## Technologies Used

- React
- React Router
- Axios for API requests
- CSS for styling (optionally could use Tailwind CSS)
- JWT for authentication

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
   ```
   REACT_APP_API_BASE_URL=http://localhost:3001
   REACT_APP_MOVIE_SERVICE_URL=http://localhost:3002
   REACT_APP_BOOKING_SERVICE_URL=http://localhost:3003
   REACT_APP_SHOWTIME_SERVICE_URL=http://localhost:3004
   ```
4. Start the development server: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## API Integration

The application integrates with the following microservices:
- **Auth Service**: User registration and login
- **Movie Service**: Fetching movies and their details
- **Showtime Service**: Managing movie showtimes
- **Booking Service**: Handling ticket bookings