import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent {

  message!: string
  text!: string
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SuccessDialogComponent>, private _router: Router) {
    if (data) {
      this.message = data.message;
      this.text = data.text;
    }
  }

  returnHome() {
    this._router.navigate(['/movie-content'])
    window.location.reload();
  }

}
