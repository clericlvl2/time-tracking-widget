import { Component } from '@angular/core';
import { Activity, TimePeriod } from 'src/app/models/time-data-interface';
import { DataProviderService } from "./services/data-provider.service";
import { PeriodProviderService } from "./services/period-provider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dataProvider: DataProviderService,
              private periodProvider: PeriodProviderService) { }
  activityPeriod: TimePeriod = this.periodProvider.getActivityPeriod();
  activityList: Activity[] = this.dataProvider.getActivityData(this.activityPeriod);
  title = 'angular-project';
}
