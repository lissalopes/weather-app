import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForecastPillComponent } from './shared/forecast-pill/forecast-pill.component';
import { ForecastCardComponent } from './shared/forecast-card/forecast-card.component';
import { ForecastDayComponent } from './shared/forecast-day/forecast-day.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastPillComponent,
    ForecastCardComponent,
    ForecastDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
