import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MaterialModule } from './modules/material/material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieContentComponent } from './components/movie-content/movie-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditComponent,
    MovieListComponent,
    MovieDetailsComponent,
    NavBarComponent,
    ProgressBarComponent,
    DeleteDialogComponent,
    SuccessDialogComponent,
    MovieCardComponent,
    MovieContentComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
