import { Component } from '@angular/core';
import { PeriodProviderService } from "../services/period-provider.service";
import { TimePeriod } from "../models/time-data-interface";

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent {
  constructor(private periodProvider: PeriodProviderService) { }

  updatePeriod(newPeriod: TimePeriod): void {
    this.periodProvider.setActivityPeriod(newPeriod);
  }
}
