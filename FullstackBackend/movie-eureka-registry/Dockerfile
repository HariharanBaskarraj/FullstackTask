FROM openjdk:11
EXPOSE 8761
ENV hostname=localhost
ENV server.port=8761
COPY /target/movie-eureka.jar movie-eureka.jar
ENTRYPOINT ["java", "-jar","movie-eureka.jar"]