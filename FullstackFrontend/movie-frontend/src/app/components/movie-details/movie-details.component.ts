import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId!: number;
  movieById!: Movie;
  roles: string[] = this._authService.getRoles();

  constructor(private _movieService: MovieService, private _router: Router, private _activatedRoute: ActivatedRoute, private _authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: (data) => {
        this.movieId = data["id"];
      }
    })

    this._movieService.getMovieById(this.movieId).subscribe({
      next: (data) => {
        this.movieById = data;
      }
    })
  }

  editMovie(movieId: number) {
    this._router.navigate(['/update-movie', movieId])
  }


  goBack() {
    this._router.navigate(['/movie-content'])
  }

  openDeleteDialog() {
    this.dialog.open(DeleteDialogComponent, {
      data: {
        message: 'Are you sure to delete this record ?',
        buttonText: {
          delId: this.movieId
        }
      }
    });
  }

}
