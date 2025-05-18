-- Creating the movie table
CREATE TABLE IF NOT EXISTS movie (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  duration INT NOT NULL,  -- in minutes
  rating DOUBLE NOT NULL,  -- IMDB-like rating
  title VARCHAR(255) NOT NULL
);

-- Inserting dummy movie data
INSERT INTO movie (description, duration, rating, title) VALUES
('Rebels fight the Matrix', 136, 8.7, 'The Matrix'),
('Tragic love on ship', 195, 7.8, 'Titanic'),
('Avengers fight Thanos', 181, 8.4, 'Avengers: Endgame'),
('Thieves rob gold in Italy', 125, 7.5, 'The Italian Job'),
('Boxer fights against odds', 130, 8.0, 'Lagaan');

-- Creating the showtime table
CREATE TABLE IF NOT EXISTS showtime (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  available_seats INT NOT NULL,
  movie_id BIGINT NOT NULL,
  show_time DATETIME(6) NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movie(id)
);

-- Inserting dummy showtime data
INSERT INTO showtime (available_seats, movie_id, show_time) VALUES
(100, 1, '2025-06-01 18:30:00'),
(150, 2, '2025-06-01 20:00:00'),
(120, 3, '2025-06-02 14:00:00'),
(90, 4, '2025-06-02 16:30:00'),
(110, 5, '2025-06-03 19:00:00');
