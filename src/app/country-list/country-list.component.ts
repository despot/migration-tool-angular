import { CountryDetailComponent } from './../country-detail/country-detail.component';
import { Observable } from "rxjs";
import { CountryService } from "./../country.service";
import { Country } from "./../country";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  countries: Observable<Country[]>;

  constructor(private countryService: CountryService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.countries = this.countryService.getCountriesList();
    console.log("Reloaded countries!");
  }

//  deleteCountry(id: number) {
//    this.countryService.deleteCountry(id)
//      .subscribe(
//        data => {
//          console.log(data);
//          this.reloadData();
//        },
//        error => console.log(error));
//  }

  countryDetails(id: number){
    this.router.navigate(['details', id]);
  }

//  updateCountry(id: number){
//    this.router.navigate(['update', id]);
//  }

}
