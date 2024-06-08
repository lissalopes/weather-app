import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastPillComponent } from './forecast-pill.component';

describe('ForecastPillComponent', () => {
  let component: ForecastPillComponent;
  let fixture: ComponentFixture<ForecastPillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastPillComponent]
    });
    fixture = TestBed.createComponent(ForecastPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
