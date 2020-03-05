import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'http://localhost:2222/countries';

  constructor(private http: HttpClient) { }

/*
  getCountry(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCountry(country: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, country);
  }

  updateCountry(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
*/
  getCountriesList(): Observable<any> {
    //getAllCountriesResponse : Observable<any> = this.http.get(`${this.baseUrl}/getAll`);
    //this.getAllCountriesResponse = this.http.get(`${this.baseUrl}/getAll`);
    return this.http.get(`${this.baseUrl}/getAll`)
        .pipe(
          tap( // Log the result or error
            data => console.log(data), //this.log(data),
            error => console.log('Error happened: ', error) //this.logError(error)
          )
        );
    //console.log(getAllCountriesResponse);
    //return getAllCountriesResponse;
  }
}
