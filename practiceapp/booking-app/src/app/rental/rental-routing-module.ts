import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import {HttpClientModule} from '@angular/common/http';
import { RentalComponent } from './rental.component';
import { ProvidersFeature } from '@angular/core/src/render3';
import { RentalService } from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import {NgPipesModule} from 'ngx-pipes';
import {MapModule} from '../common/map/map.module';


const routes: Routes = [
    {path: 'rentals' ,
    component: RentalComponent,
    children: [
     {path: '' , component: RentalListComponent },
     {path: ':rentalId', component: RentalDetailComponent}
]}

  ];

@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentalDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule,
        NgPipesModule,
        MapModule
    ],
    providers: [RentalService]
})
export class RentalModule { }
