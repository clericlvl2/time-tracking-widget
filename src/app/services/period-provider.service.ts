import { Injectable } from '@angular/core';
import { TimePeriod } from 'src/app/models/interfaces';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PeriodProviderService {
  constructor() { }
  private currentPeriod: BehaviorSubject<TimePeriod> = new BehaviorSubject<TimePeriod>('daily');

  setAsyncPeriod(newPeriod: TimePeriod) {
    this.currentPeriod.next(newPeriod);
  }
  getAsyncPeriod() {
    return this.currentPeriod;
  }
}
