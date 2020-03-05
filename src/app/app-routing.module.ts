import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CreateIndexWeightsComponent } from './create-index-weights/create-index-weights.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
//import { UpdateCountryComponent } from './update-country/update-country.component';

const routes: Routes = [
  { path: '', redirectTo: 'country', pathMatch: 'full' },
  { path: 'countries', component: CountryListComponent },
//  { path: 'add', component: CreateCountryComponent },
//  { path: 'update/:id', component: UpdateCountryComponent },
  { path: 'details/:id', component: CountryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
