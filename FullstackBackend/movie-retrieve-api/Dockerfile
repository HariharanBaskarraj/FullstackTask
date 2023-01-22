FROM openjdk:11
EXPOSE 8082
ENV host=localhost
ENV port=8888
COPY /target/movie-retrieve.jar movie-retrieve.jar
ENTRYPOINT ["java", "-jar","movie-retrieve.jar"]