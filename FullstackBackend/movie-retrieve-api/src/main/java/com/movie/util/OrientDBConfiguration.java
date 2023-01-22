package com.movie.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.orientechnologies.orient.core.db.OrientDB;
import com.orientechnologies.orient.core.db.OrientDBConfig;
/**
 * This is the configuration class for the connection to the Orient DB
 * @author HariharanB
 *
 */
@Configuration
public class OrientDBConfiguration {

	@Value("${database.host}")
	private String host;
	
	@Bean
	public OrientDB dbInstance() {
		OrientDB orient = new OrientDB(host, OrientDBConfig.defaultConfig());

		return orient;
	}
}
