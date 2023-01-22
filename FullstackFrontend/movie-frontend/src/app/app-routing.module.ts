import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { MovieContentComponent } from './components/movie-content/movie-content.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie-content', pathMatch: 'full' },
  { path: 'movie-content', component: MovieContentComponent, canActivate: [AuthGuard], data: { roles: ["manager", "admin", "commoner"] } },
  { path: 'add-movie', component: AddEditComponent, canActivate: [AuthGuard], data: { roles: ["admin"] } },
  { path: 'update-movie/:id', component: AddEditComponent, canActivate: [AuthGuard], data: { roles: ["admin","manager"] } },
  { path: 'movie-details/:id', component: MovieDetailsComponent, canActivate: [AuthGuard], data: { roles: ["manager", "admin", "commoner"] } }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
