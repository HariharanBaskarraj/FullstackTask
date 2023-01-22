import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _serviceUrl = "http://localhost:9000/movieservice/movies";
  private _retrieveUrl = "http://localhost:9000/movieretrieve/movies";

  constructor(private _httpClient: HttpClient) {
  }

  getMovies = (): Observable<Movie[]> => {
    return this._httpClient.get<Movie[]>(this._retrieveUrl);
  }

  getMovieById = (id: number): Observable<Movie> => {
    let url = this._retrieveUrl.concat("/") + id;
    return this._httpClient.get<Movie>(url);
  }

  saveMovie = (movie: Movie): Observable<Movie> => {
    return this._httpClient.post<Movie>(this._serviceUrl, movie);
  }

  updateMovie = (movie: Movie): Observable<Movie> => {
    return this._httpClient.put<Movie>(this._serviceUrl, movie);
  }

  deleteMovie = (movieId: number): Observable<Movie> => {
    return this._httpClient.delete<Movie>(this._serviceUrl.concat("/") + movieId);
  }

  sortMovies = (column: string, direction: string): Observable<Movie[]> => {
    return this._httpClient.get<Movie[]>(this._retrieveUrl.concat("/sort/" + column + "/" + direction));
  }

  pageMovie = (page: number, pageSize: number): Observable<Movie[]> => {
    return this._httpClient.get<Movie[]>(this._retrieveUrl.concat("/page/" + (pageSize + 1) + "/" + page));
  }

  sortAndPage = (column: string, direction: string, page: number, pageSize: number): Observable<Movie[]> => {
    return this._httpClient.get<Movie[]>(this._retrieveUrl.concat("/" + column + "/" + direction + "/" + (pageSize + 1) + "/" + page));
  }
}


