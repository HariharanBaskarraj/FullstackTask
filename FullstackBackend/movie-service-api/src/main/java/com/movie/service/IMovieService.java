/**
 * 
 */
package com.movie.service;

import java.util.List;
import java.util.Optional;

import com.movie.model.Movie;

/**
 * @author HariharanB
 *
 */
public interface IMovieService {

	void addMovie(Movie movie);

	void updateMovie(Movie movie);

	void deleteMovie(int movieId);


}
