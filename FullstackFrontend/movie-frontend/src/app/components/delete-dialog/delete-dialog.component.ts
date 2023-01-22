import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  message!: string 
  movieId!:number;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DeleteDialogComponent>, private _router: Router,private _movieService: MovieService ) {
      if(data){
    this.message = data.message || this.message;
    if (data.buttonText) {
      this.movieId = data.buttonText.delId;
      console.log(this.movieId);
    }
      }
  }

  deleteMovie(movieId: number) {
    this._movieService.deleteMovie(movieId).subscribe({
      next: (data) => {
        console.log('deleted');
      }
    })
    this._router.navigate(['/movie-view'])
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
