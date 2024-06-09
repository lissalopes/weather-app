import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  private apiKey = '89c5b1b153068d744b97485c9a020ad9';
  //private apiURL = `https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={API Key}`;

  private baseURL = 'https://api.openweathermap.org/data/2.5/weather?'


  constructor(private http:HttpClient) {}

  getWeatherData(cityName: string, cnt: number = 4): Observable<any>{
    return this.http.get(this.baseURL, {
      params: {
        'q': cityName,
        'cnt': cnt,
        'appid': this.apiKey,
      }
    });
  }

}
