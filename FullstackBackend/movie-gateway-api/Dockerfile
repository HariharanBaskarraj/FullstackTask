FROM openjdk:11
EXPOSE 9000
ENV confighost=localhost
ENV configport=8888
COPY /target/movie-gateway.jar movie-gateway.jar
ENTRYPOINT ["java", "-jar","movie-gateway.jar"]