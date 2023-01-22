/**
 * 
 */
package com.movie.controllers;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movie.model.Movie;
import com.movie.service.IMovieService;

/**
 * The controller class that maps the url to the methods.
 * 
 * @author HariharanB
 */
@RestController
@RequestMapping("/movieapp")
@CrossOrigin("http://localhost:4200")
public class MovieController {

	private IMovieService movieService;
	private Logger logger = LoggerFactory.getLogger(MovieController.class);

	@Autowired
	public void setMovieService(IMovieService movieService) {
		this.movieService = movieService;
	}

	/**
	 * This method is used to add a new movie record to the database.
	 * 
	 * @param movie Movie object
	 * @author HariharanB
	 */
	@PostMapping("/movies")
	ResponseEntity<Void> addMovie(@RequestBody Movie movie) {
		HttpHeaders header = new HttpHeaders();
		header.add("desc", "Add the movie to the db");
		header.add("info", "API-add movie");
		logger.info("In Controller, Adding");
		movieService.addMovie(movie);
		return ResponseEntity.status(HttpStatus.OK).build();
	}

	/**
	 * This method is used to edit specific details of existing movie records in the
	 * database.
	 * 
	 * @param movie Movie object
	 * @author HariharanB
	 */
	@PutMapping("/movies")
	ResponseEntity<Void> updateMovie(@RequestBody Movie movie) {
		HttpHeaders header = new HttpHeaders();
		header.add("desc", "Update the movie in the db");
		header.add("info", "API-update movie");
		logger.info("In Controller, Updating");
		movieService.updateMovie(movie);
		return ResponseEntity.status(HttpStatus.OK).build();
	}

	/**
	 * This method is used to delete any existing movie record from the database.
	 * 
	 * @param movieId The unique ID of the movie to delete
	 * @author HariharanB
	 */
	@DeleteMapping("/movies/{movieId}")
	ResponseEntity<Void> deleteMovie(@PathVariable int movieId) {
		HttpHeaders header = new HttpHeaders();
		header.add("desc", "Deletes the movie in the db");
		header.add("info", "API-delete movie");
		logger.info("In Controller, Deleting");
		movieService.deleteMovie(movieId);
		return ResponseEntity.status(HttpStatus.OK).build();
	}

	/**
	 * This method is used to sort the retrieved movie records as per the column
	 * name and increasing/decreasing order.
	 * 
	 * @param columnName The column that needs to be sorted
	 * @param order      Ascending or Descending Order
	 */
	@GetMapping("/movies/sort/{columnName}/{order}")
	List<Movie> sort(@PathVariable String columnName, @PathVariable String order) {
		HttpHeaders header = new HttpHeaders();
		header.add("desc", "Sorts the records in asc/desc");
		header.add("info", "API-sorting based on column");
		logger.info("In Controller, Sorting");
		return movieService.sort(columnName, order);

	}

	/**
	 * This method is used to retrieve all the movie records from the database.
	 * 
	 * @author HariharanB
	 */
	@GetMapping("/movies")
	ResponseEntity<List<Movie>> getAll() {
		HttpHeaders header = new HttpHeaders();
		header.add("desc", "Retrieves all the records");
		header.add("info", "API-retrieve movie");
		logger.info("In Controller, Retrieving");
		return ResponseEntity.ok().body(movieService.getAll());
	}

	/**
	 * This method is used to retrieve a movie record with matching movie ID.
	 * 
	 * @param movieId The unique ID of the movie to fetch
	 * @author HariharanB
	 */
	@GetMapping("/movies/{movieId}")
	ResponseEntity<Optional<Movie>> getById(@PathVariable int movieId) {
		HttpHeaders header = new HttpHeaders();
		header.add("desc", "Gets the movie with the matching ID");
		header.add("info", "API-gets movie by id");
		logger.info("In Controller, Get by ID");
		return ResponseEntity.ok().body(movieService.getById(movieId));
	}

	/**
	 * This method is used to page the data that are retrieved from the database.
	 * 
	 * @param page     the number of the page
	 * @param pageSize number of records per page
	 */
	@GetMapping("/movies/page/{page}/{pageSize}")
	List<Movie> getPage(@PathVariable int page, @PathVariable int pageSize) {
		HttpHeaders header = new HttpHeaders();
		header.add("desc", "Pages the result into sets of records");
		header.add("info", "API-pages the result");
		logger.info("In Controller, Paging");
		return movieService.getPage(page, pageSize);
	}

}
