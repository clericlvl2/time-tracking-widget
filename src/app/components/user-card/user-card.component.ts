import { Component } from '@angular/core';
import { PeriodProviderService } from "../../services/period-provider.service";
import { TimePeriod } from "../../models/interfaces";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserCardComponent {
  constructor(private periodProvider: PeriodProviderService) { }

  updateActivityPeriod(newPeriod: TimePeriod): void {
    this.periodProvider.setAsyncPeriod(newPeriod);
  }
}
