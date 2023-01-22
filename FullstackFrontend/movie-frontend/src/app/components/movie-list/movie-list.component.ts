import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  counter!: number;
  arrow = "arrow_circle_down";

  constructor(private _movieService: MovieService,
    private _authService: AuthService,
    private _router: Router,
    private dialog: MatDialog,
  ) { }

  // card = false;
  movies!: Movie[];
  roles!: string[];
  movie!: Movie;
  movieId!: number;
  displayedColumns: string[] = ['movieId', 'movieName', 'synopsis', 'releaseDate', 'runtime', 'genre', 'leadActor', 'leadActress', 'director', 'writer', 'productionHouse', 'composer', 'distributor', 'editor', 'budget', 'collection', 'criticRatings', 'cbfcCertificate', 'awardCount', 'basis', 'audienceRatings'];
  sort_options: string[] = ['movie_id', 'movie_name', 'synopsis', 'release_date', 'runtime', 'genre', 'lead_actor', 'lead_actress', 'director', 'writer', 'production_house', 'composer', 'distributor', 'editor', 'budget', 'collection', 'critic_ratings', 'cbfc_certificate', 'award_count', 'basis', 'audience_ratings'];
  columns: string[] = [];
  direction = true;
  directionValue!: string;
  movieCount!: number;
  page!: number;
  pageSize!: number;
  column!:string;

  onSelect(event: any) {
    console.log(event.value);
    if (event.value.length == 0) {
      this.dialog.open(SuccessDialogComponent
        , {
          data: {
            message: "Atleast one column should be selected...",
            text:"reset"
          },
        });
    } else {
      this.displayedColumns = event.value;
    }

  }


  ngOnInit(): void {
    this.roles = this._authService.getRoles();

    this._movieService.getMovies().subscribe({
      next: (data) => {
        this.columns = this.displayedColumns;
        this.movies = data;
        this.movieCount = this.movies.length;
      },
      error: (data) => console.log(data),
      complete: () => console.log("Completed")
    });

    this._movieService.pageMovie(10, 0).subscribe({
      next: (data) => {
        this.movies = data;
      },
      error: (error) => console.log(error),
      complete: () => console.log("completed")
    })
  }


  editMovie(movieId: number) {
    this._router.navigate(['/update-movie', movieId])
  }

  sortMovie = (column: string) => {
    this.column=column;
    if (this.direction) {
      this.directionValue = "ASC";
      this.arrow = "arrow_circle_down";
      this.direction = !this.direction;
    } else {
      this.direction = !this.direction;
      this.arrow = "arrow_circle_up";
      this.directionValue = "DESC";
    }
    this.sortAndPage();
  }

  count(): number {
    return this.movieCount;
  }

  route(movieId: number) {
    this._router.navigate(["/movie-details", movieId]);
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

  sortAndPage() {
    this.page=10;
    this.pageSize=0;
    this._movieService.sortAndPage(this.column, this.directionValue, this.page, this.pageSize).subscribe({
      next: (data) => this.movies = data,
      error: (data) => console.log(data),
      complete: () => console.log("Completed")
    })
  }

}