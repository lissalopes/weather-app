import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchForm! : FormGroup;

  constructor (private fb:FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      cityName: [null, Validators.required]
    })
  }

  searchWeather() {
    console.log(this.searchForm.value);
  }

  title = 'weather-app';

  days = [
    './forecast-day.component.html',
    './forecast-day.component.html',
    './forecast-day.component.html',
    './forecast-day.component.html',

  ]

  hours = [ 
    './forecast-pill.component.html',
    './forecast-pill.component.html',
    './forecast-pill.component.html',
    './forecast-pill.component.html',
    './forecast-pill.component.html',
    './forecast-pill.component.html'

  ]

  details = [
    './forecast-card.component.html',
    './forecast-card.component.html',
    './forecast-card.component.html',
    './forecast-card.component.html',
    './forecast-card.component.html',
    './forecast-card.component.html',
  ]
}
