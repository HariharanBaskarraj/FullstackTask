/**
 * 
 */
package com.movie.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.movie.model.Movie;
import com.movie.util.Queries;
import com.orientechnologies.orient.core.db.ODatabaseSession;
import com.orientechnologies.orient.core.db.OrientDB;
import com.orientechnologies.orient.core.sql.executor.OResult;

/**
 * This class is the service implementation and contains methods that need to be
 * executed for the CRUD operations.
 * 
 * @author HariharanB
 */
@Service
public class MovieServiceImpl implements IMovieService {

	@Value("${database.dbname}")
	private String databaseName;
	@Value("${database.username}")
	private String username;
	@Value("${database.password}")
	private String password;
	
	private OrientDB orientDatabase;
	private static Logger logger = LoggerFactory.getLogger(MovieServiceImpl.class);

	@Autowired
	public void setOrientDatabase(OrientDB orientDatabase) {
		this.orientDatabase = orientDatabase;
	}

	/**
	 * This method is used to add a new movie record to the database.
	 * 
	 * @param movie Movie object
	 * @author HariharanB
	 */
	@Override
	public void addMovie(Movie movie) {
		logger.info("Connecting to the database"+databaseName);
		ODatabaseSession orientSession = orientDatabase.open(databaseName, username,password);
		logger.info(databaseName+"connected");
		Object[] movies = { movie.getMovieId(), movie.getMovieName(), movie.getSynopsis(), movie.getReleaseDate(),
				movie.getRuntime(), movie.getGenre(), movie.getLeadActor(), movie.getLeadActress(), movie.getDirector(),
				movie.getWriter(), movie.getProductionHouse(), movie.getComposer(), movie.getDistributor(),
				movie.getEditor(), movie.getBudget(), movie.getCollection(), movie.getCriticRatings(),
				movie.getCbfcCertificate(), movie.getAwardCount(), movie.getBasis(), movie.getAudienceRatings() };
		logger.info("executing query");
		orientSession.command(Queries.INSERT_QUERY, movies);

	}

	/**
	 * This method is used to edit specific details of existing movie records in the database.
	 * 
	 * @param movie Movie object
	 * @author HariharanB
	 */
	@Override
	public void updateMovie(Movie movie) {
		logger.info("Connecting to the database"+databaseName);
		ODatabaseSession orientSession = orientDatabase.open(databaseName, username,password);
		logger.info(databaseName+"connected");
		Object[] movies = { movie.getMovieName(), movie.getSynopsis(), movie.getReleaseDate(), movie.getRuntime(),
				movie.getGenre(), movie.getLeadActor(), movie.getLeadActress(), movie.getDirector(), movie.getWriter(),
				movie.getProductionHouse(), movie.getComposer(), movie.getDistributor(), movie.getEditor(),
				movie.getBudget(), movie.getCollection(), movie.getCriticRatings(), movie.getCbfcCertificate(),
				movie.getAwardCount(), movie.getBasis(), movie.getAudienceRatings(), movie.getMovieId() };
		logger.info("executing query");
		orientSession.command(Queries.UPDATE_QUERY, movies);
	}

	/**
	 * This method is used to delete any existing movie record from the database.
	 * 
	 * @param movieId The unique ID of the movie to delete
	 * @author HariharanB
	 */
	@Override
	public void deleteMovie(int movieId) {
		logger.info("Connecting to the database"+databaseName);
		ODatabaseSession orientSession = orientDatabase.open(databaseName, username,password);
		logger.info(databaseName+"connected");
		logger.info("executing query");
		orientSession.command(Queries.DELETE_QUERY, movieId);
	}

	
}
