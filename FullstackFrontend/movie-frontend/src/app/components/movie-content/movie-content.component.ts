import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-movie-content',
  templateUrl: './movie-content.component.html',
  styleUrls: ['./movie-content.component.css']
})
export class MovieContentComponent implements OnInit {
  card = false;
  left!: string;
  right: string = "Card View";
  roles!: string[];

  constructor(private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    this.roles = this._authService.getRoles();
  }

  onChange() {
    this.card = !this.card;
    if (this.right == "Card View") {
      this.left = "Table View"
      this.right = ""
    }
    else {
      this.left = ""
      this.right = "Card View"
    }
  }

  add() {
    this._router.navigate(["/add-movie"]);
  }
}
