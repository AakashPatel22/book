package com.movie_service.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie_service.entity.Movie;
import com.movie_service.service.MovieService;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin(origins = "*")
public class MovieController {

	@Autowired
	private MovieService movieService;

	@GetMapping
	public List<Movie> getAllMovies() {
		try {
        return movieService.getAllMovies();
    } catch (Exception e) {
		 System.err.println("Exception in getAllMovies(): " + e.getMessage());
        e.printStackTrace();  // or use a logger
        throw e;
    }
	}

	@GetMapping("/{id}")
	public Movie getMovieById(@PathVariable Long id) {
		return movieService.getMovieById(id);
	}
	
	@GetMapping("/{id}/exists")
	public Boolean validateMovie(@PathVariable Long id) {
	    return movieService.doesMovieExist(id);
	}
}
