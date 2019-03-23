import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { RentalModule} from './rental/rental-routing-module';

const routes: Routes = [
  {path: '', redirectTo: '/rentals', pathMatch: 'full'}
];


@NgModule({
  declarations: [
],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterModule,
    RentalModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
