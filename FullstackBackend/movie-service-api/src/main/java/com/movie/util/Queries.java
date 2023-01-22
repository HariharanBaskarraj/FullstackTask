/**
 * 
 */
package com.movie.util;

/**
 * This class is curated for the query mapping to the service.
 * 
 * @author HariharanB
 */
public class Queries {
	public static final String INSERT_QUERY = "insert into Movie set movie_id=?,movie_name=?,synopsis=?,release_date=?,runtime=?,genre=?,lead_actor=?,lead_actress=?,director=?,writer=?,production_house=?,composer=?,distributor=?,editor=?,budget=?,collection=?,critic_ratings=?,cbfc_certificate=?,award_count=?,basis=?,audience_ratings=?;";
	public static final String UPDATE_QUERY = "update Movie set movie_name=?,synopsis=?,release_date=?,runtime=?,genre=?,lead_actor=?,lead_actress=?,director=?,writer=?,production_house=?,composer=?,distributor=?,editor=?,budget=?,collection=?,critic_ratings=?,cbfc_certificate=?,award_count=?,basis=?,audience_ratings=? where movie_id=?;";
	public static final String DELETE_QUERY = "delete from Movie where movie_id=?;";
}
