FROM openjdk:11
EXPOSE 8888
ENV server.port=8888
COPY /target/movie-config.jar movie-config.jar
ENTRYPOINT ["java", "-jar","movie-config.jar"]