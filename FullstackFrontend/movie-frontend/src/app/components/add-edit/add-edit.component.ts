import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  movie!: Movie;
  formName!: string;
  movieForm = new FormGroup({
    movieId: new FormControl(),
    movieName: new FormControl(),
    synopsis: new FormControl(),
    releaseDate: new FormControl(),
    runtime: new FormControl(),
    genre: new FormControl(),
    leadActor: new FormControl(),
    leadActress: new FormControl(),
    director: new FormControl(),
    writer: new FormControl(),
    productionHouse: new FormControl(),
    composer: new FormControl(),
    distributor: new FormControl(),
    editor: new FormControl(),
    budget: new FormControl(),
    collection: new FormControl(),
    criticRatings: new FormControl(),
    cbfcCertificate: new FormControl(),
    awardCount: new FormControl(),
    basis: new FormControl(),
    audienceRatings: new FormControl()
  });
  text!: string;

  constructor(private _movieService: MovieService, private _location: Location, private _activatedRoute: ActivatedRoute, private _authService: AuthService, private dialog: MatDialog) { }

  movieId!: number;
  movieById!: Movie;
  enter!: string;
  submit!: string;
  status!: string;
  roles: string[] = this._authService.getRoles();

  sliderControl = new FormControl();

  genreSelected!: string;
  certificateSelected!: string;
  genreOptions: string[] = ['Action', 'Suspense', 'Thriller', 'Drama', 'Romance', 'Comedy', 'Horror', 'Documentary'];
  certificateOptions: string[] = ['U', 'U/A', 'A', 'S']


  ngOnInit(): void {

    this._activatedRoute.params.subscribe({
      next: (data) => {
        this.movieId = data["id"];
      }
    })

    if (this.movieId) {
      this._movieService.getMovieById(this.movieId).subscribe({
        next: (data) => {
          this.movieById = data;
          this.movieForm.setValue(data);
          console.log(data)
        }
      })
      this.enter = "Edit";
      this.formName = "UPDATE FORM";
      this.submit = "Update Movie";

    } else {
      this.enter = "Enter";
      this.formName = "ADD FORM";
      this.submit = "Add Movie";

      this.movieForm.controls['movieId'].setValidators([Validators.required])
      this.movieForm.controls['movieName'].setValidators([Validators.required])
      this.movieForm.controls['releaseDate'].setValidators([Validators.required])
      this.movieForm.controls['genre'].setValidators([Validators.required])
      this.movieForm.controls['leadActor'].setValidators([Validators.required])
      this.movieForm.controls['leadActress'].setValidators([Validators.required])
      this.movieForm.controls['director'].setValidators([Validators.required])
      this.movieForm.controls['writer'].setValidators([Validators.required])
      this.movieForm.controls['productionHouse'].setValidators([Validators.required])
      this.movieForm.controls['cbfcCertificate'].setValidators([Validators.required])
    }

  }
  print = () => {
    console.log(this.movieForm)
  }
  submitMovie = (movieForm: any) => {
    if (this.movieId) {
      this.updateMovie(movieForm);
    } else {
      this.addMovie(movieForm);
    }
  };

  addMovie = (movieForm: any) => {
    this.text = "Added Successfully";
    this.movie = movieForm.value;
    this._movieService.saveMovie(this.movie).subscribe({
      next: (data) => console.log(data)
    })
    this.openSuccessDialog();
  }

  updateMovie = (movieForm: any) => {
    this.text = "Updated Successfully";
    this.movie = movieForm.value;
    this._movieService.updateMovie(this.movie).subscribe({
      next: (data) => {
        this.movie = data;
      }
    })
    this.openSuccessDialog();
  }


  goBack() {
    this._location.back();

  }

  openSuccessDialog() {
    this.dialog.open(SuccessDialogComponent
      , {
        data: {
          message: this.text
        },
      });
  }

}

