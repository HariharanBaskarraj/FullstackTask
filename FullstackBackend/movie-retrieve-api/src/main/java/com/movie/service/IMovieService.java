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

	List<Movie> getAll();

	Optional<Movie> getById(int movieId);

	List<Movie>sort(String methodname, String order);

	List<Movie> getPage(int page, int pageSize);
	List<Movie> sortAndPage(String columnName, String order,int page, int pageSize);

}
