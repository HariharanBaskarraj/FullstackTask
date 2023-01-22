import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  progressValue = 0;
  isShow:boolean|number = true;

  constructor(private _service: AuthService, private _router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getProgressValue(v: number) {
    this.progressValue = v;
  }
  
  logout = () => {
    this._service.logout();
  }

  userProfile() {
    this._service.redirectToProfile();
  }

  goHome() {
    this._router.navigate(['/movie-content']);
  } 

}
