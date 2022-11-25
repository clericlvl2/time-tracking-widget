import { Component, Input } from '@angular/core';
import { Activity, TimePeriod } from 'src/app/models/interfaces';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})

export class ActivityCardComponent {
  constructor() { }
  @Input() activityData: Activity = {
    title: 'activityTitle',
    currentTime: 0,
    previousTime: 0
  };
  @Input() activityPeriod: TimePeriod = 'daily';

  getPeriodTitle(): string {
    const periods = {
      daily: 'day',
      weekly: 'week',
      monthly: 'month'
    }
    return periods[this.activityPeriod];
  }
  getCardClass(name: string): string {
    return name.toLowerCase().replace(/\s/g, '-');
  }
}
