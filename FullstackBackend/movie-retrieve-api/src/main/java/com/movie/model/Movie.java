/**
 * 
 */
package com.movie.model;

import java.util.Date;

/**
 * This class is curated for persistence of the movie properties.
 * 
 * @author HariharanB
 *
 */
public class Movie {
	private int movieId;
	private String movieName;
	private String synopsis;
	private Date releaseDate;
	private int runtime;
	private String genre;  
	private String leadActor;   
	private String leadActress;  
	private String director;  
	private String writer;
	private String productionHouse;
	private String composer;
	private String distributor;
	private String editor;
	private int budget;
	private int collection;
	private double criticRatings;
	private String cbfcCertificate;  
	private int awardCount;
	private String basis;
	private double audienceRatings;

	public Movie() {
		super();
	}

	public Movie(int movieId, String movieName, String synopsis, Date releaseDate, int runtime, String genre,
			String leadActor, String leadActress, String director, String writer, String productionHouse,
			String composer, String distributor, String editor, int budget, int collection, double criticRatings,
			String cbfcCertificate, int awardCount, String basis, double audienceRatings) {
		super();
		this.movieId = movieId;
		this.movieName = movieName;
		this.synopsis = synopsis;
		this.releaseDate = releaseDate;
		this.runtime = runtime;
		this.genre = genre;
		this.leadActor = leadActor;
		this.leadActress = leadActress;
		this.director = director;
		this.writer = writer;
		this.productionHouse = productionHouse;
		this.composer = composer;
		this.distributor = distributor;
		this.editor = editor;
		this.budget = budget;
		this.collection = collection;
		this.criticRatings = criticRatings;
		this.cbfcCertificate = cbfcCertificate;
		this.awardCount = awardCount;
		this.basis = basis;
		this.audienceRatings = audienceRatings;
	}

	public int getMovieId() {
		return movieId;
	}

	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public Date getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(Date releaseDate) {
		this.releaseDate = releaseDate;
	}

	public int getRuntime() {
		return runtime;
	}

	public void setRuntime(int runtime) {
		this.runtime = runtime;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getLeadActor() {
		return leadActor;
	}

	public void setLeadActor(String leadActor) {
		this.leadActor = leadActor;
	}

	public String getLeadActress() {
		return leadActress;
	}

	public void setLeadActress(String leadActress) {
		this.leadActress = leadActress;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public String getProductionHouse() {
		return productionHouse;
	}

	public void setProductionHouse(String productionHouse) {
		this.productionHouse = productionHouse;
	}

	public String getComposer() {
		return composer;
	}

	public void setComposer(String composer) {
		this.composer = composer;
	}

	public String getDistributor() {
		return distributor;
	}

	public void setDistributor(String distributor) {
		this.distributor = distributor;
	}

	public String getEditor() {
		return editor;
	}

	public void setEditor(String editor) {
		this.editor = editor;
	}

	public int getBudget() {
		return budget;
	}

	public void setBudget(int budget) {
		this.budget = budget;
	}

	public int getCollection() {
		return collection;
	}

	public void setCollection(int collection) {
		this.collection = collection;
	}

	public double getCriticRatings() {
		return criticRatings;
	}

	public void setCriticRatings(double criticRatings) {
		this.criticRatings = criticRatings;
	}

	public String getCbfcCertificate() {
		return cbfcCertificate;
	}

	public void setCbfcCertificate(String cbfcCertificate) {
		this.cbfcCertificate = cbfcCertificate;
	}

	public int getAwardCount() {
		return awardCount;
	}

	public void setAwardCount(int awardCount) {
		this.awardCount = awardCount;
	}

	public String getBasis() {
		return basis;
	}

	public void setBasis(String basis) {
		this.basis = basis;
	}

	public double getAudienceRatings() {
		return audienceRatings;
	}

	public void setAudienceRatings(double audienceRatings) {
		this.audienceRatings = audienceRatings;
	}

	@Override
	public String toString() {
		return "Movie [movieId=" + movieId + ", movieName=" + movieName + ", synopsis=" + synopsis + ", releaseDate="
				+ releaseDate + ", runtime=" + runtime + ", genre=" + genre + ", leadActor=" + leadActor
				+ ", leadActress=" + leadActress + ", director=" + director + ", writer=" + writer
				+ ", productionHouse=" + productionHouse + ", composer=" + composer + ", distributor=" + distributor
				+ ", editor=" + editor + ", budget=" + budget + ", collection=" + collection + ", criticRatings="
				+ criticRatings + ", cbfcCertificate=" + cbfcCertificate + ", awardCount=" + awardCount + ", basis="
				+ basis + ", audienceRatings=" + audienceRatings + "]";
	}

	


}
