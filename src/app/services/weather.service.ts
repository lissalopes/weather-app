import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '89c5b1b153068d744b97485c9a020ad9';
  private apiURL = `api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid=${this.apiKey}'`;


  constructor(private http:HttpClient) {}

  getWeatherData(): Observable<any>{
    return this.http.get(this.apiURL);
  }

}
