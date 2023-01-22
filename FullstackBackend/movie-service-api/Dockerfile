FROM openjdk:11
EXPOSE 8081
ENV host=localhost
ENV port=8888
COPY /target/movie-service.jar movie-service.jar
ENTRYPOINT ["java", "-jar","movie-service.jar"]