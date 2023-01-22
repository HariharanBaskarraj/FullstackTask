package com.movie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
/**
 * 
 * @author HariharanB
 *
 */
@SpringBootApplication
@EnableEurekaClient
public class MovieServiceApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieServiceApiApplication.class, args);
	}

}
