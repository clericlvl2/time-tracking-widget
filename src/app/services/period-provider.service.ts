import { Injectable } from '@angular/core';
import { TimePeriod } from 'src/app/models/time-data-interface';

@Injectable({
  providedIn: 'root'
})

export class PeriodProviderService {
  constructor() { }
  private currentPeriod: TimePeriod = 'daily';

  setActivityPeriod(newPeriod: TimePeriod) {
    this.currentPeriod = newPeriod;
    console.log(this.currentPeriod);
  }
  getActivityPeriod(): TimePeriod {
    return this.currentPeriod;
  }
}
