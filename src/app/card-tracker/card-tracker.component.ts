import { Component, Input } from '@angular/core';
import { Activity, TimePeriod } from 'src/app/models/time-data-interface';

@Component({
  selector: 'app-card-tracker',
  templateUrl: './card-tracker.component.html',
  styleUrls: ['./card-tracker.component.scss']
})

export class CardTrackerComponent {
  constructor() { }
  @Input() activityData: Activity = {
    title: 'activityTitle',
    currentTime: 0,
    previousTime: 0
  };
  @Input() activityPeriod: TimePeriod = 'daily';

  setPeriodTitle(): string {
    let periodTitle: string = '';
    switch (this.activityPeriod) {
      case 'daily': periodTitle = 'day'; break;
      case 'weekly': periodTitle = 'week'; break;
      case 'monthly': periodTitle = 'month'; break;
    }
    return periodTitle;
  }
  getCardClass(name: string): string {
    return name.toLowerCase().replace(/\s/g, '-');
  }
}
