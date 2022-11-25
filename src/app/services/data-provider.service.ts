import { Injectable } from '@angular/core';
import { Activity, TimePeriod } from 'src/app/models/interfaces';
import ActivityData from 'src/app/mocks/data.json';

@Injectable({
  providedIn: 'root'
})

export class DataProviderService {
  constructor() { }
  private timeData = ActivityData;

  getActivityData(activityPeriod: TimePeriod): Activity[] {
    return this.timeData.map(dataItem => {
        return {
          title: dataItem.title,
          currentTime: dataItem.timeframes[activityPeriod].current,
          previousTime: dataItem.timeframes[activityPeriod].previous,
        }
      })
  };
}
