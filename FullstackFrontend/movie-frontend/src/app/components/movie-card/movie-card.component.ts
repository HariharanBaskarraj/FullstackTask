import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css', '../movie-details/movie-details.component.css']
})
export class MovieCardComponent implements OnInit {

  movies!: Movie[];
  displayedColumns: string[] = ['movieId', 'movieName', 'synopsis', 'releaseDate', 'runtime', 'genre', 'leadActor', 'leadActress', 'director', 'writer', 'productionHouse', 'composer', 'distributor', 'editor', 'budget', 'collection', 'criticRatings', 'cbfcCertificate', 'awardCount', 'basis', 'audienceRatings'];
  sort_options: string[] = ['movie_id', 'movie_name', 'synopsis', 'release_date', 'runtime', 'genre', 'lead_actor', 'lead_actress', 'director', 'writer', 'production_house', 'composer', 'distributor', 'editor', 'budget', 'collection', 'critic_ratings', 'cbfc_certificate', 'award_count', 'basis', 'audience_ratings'];
  columns: string[] = [];
  movieCount!: number;
  direction = true;
  directionValue!: string;
  page!: number;
  pageSize!: number;
  id:number=101;

  constructor(private _movieService: MovieService,
    private _router: Router) { }

  ngOnInit(): void {
    this._movieService.getMovies().subscribe({
      next: (data) => {
        this.columns = this.displayedColumns;
        this.movies = data;
        this.movieCount = this.movies.length;
      },
      error: (data) => console.log(data),
      complete: () => console.log("Completed")
    });

    this._movieService.pageMovie(12, 0).subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (error) => console.log(error),
      complete: () => console.log("completed")
    })
  }

  getId(){

  }
  onSelect(event: any) {
    console.log(event.value);
    if (event.value.length == 0) {
      this.displayedColumns = ['movieId', 'movieName', 'synopsis', 'releaseDate', 'runtime', 'genre', 'leadActor', 'leadActress', 'director', 'writer', 'productionHouse', 'composer', 'distributor', 'editor', 'budget', 'collection', 'criticRatings', 'cbfcCertificate', 'awardCount', 'basis', 'audienceRatings'];
    } else {
      this.displayedColumns = event.value;
    }

  }
  route(movieId: number) {
    this._router.navigate(["/movie-details", movieId]);
  }
  sortMovie = (column: string) => {
    if (this.direction) {
      this.directionValue = "ASC";
      this.direction = !this.direction;
    } else {
      this.direction = !this.direction;
      this.directionValue = "DESC";
    }

    this._movieService.sortMovies(column, this.directionValue).subscribe({
      next: (data) => this.movies = data,
      error: (data) => console.log(data),
      complete: () => console.log("Completed")
    })
  }
  count(): number {
    return this.movieCount;
  }
  pagination(pagination: PageEvent) {
    this.pageSize = pagination.pageSize;
    this.page = pagination.pageIndex;
    this._movieService.pageMovie(this.pageSize, this.page).subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (error) => console.log(error),
      complete: () => console.log("completed")
    })
  }
}
