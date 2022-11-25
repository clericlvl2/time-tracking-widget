import { Component, OnDestroy } from '@angular/core';
import { Activity, TimePeriod } from 'src/app/models/interfaces';
import { DataProviderService } from "./services/data-provider.service";
import { PeriodProviderService } from "./services/period-provider.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  constructor(private dataProvider: DataProviderService,
              private periodProvider: PeriodProviderService) { }

  activityPeriod: TimePeriod = 'daily';
  activityList: Activity[] = this.dataProvider.getActivityData(this.activityPeriod);
  newPeriodsSubscription: Subscription = this.periodProvider.getAsyncPeriod()
    .subscribe(value => {
      this.activityPeriod = value;
      this.activityList = this.dataProvider.getActivityData(value);
    });

  ngOnDestroy(): void {
    this.newPeriodsSubscription.unsubscribe();
  }
  title = 'angular-project';
}
