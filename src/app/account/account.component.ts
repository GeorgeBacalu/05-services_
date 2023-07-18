import { Component, Input } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private accountService: AccountsService) { }

  onSetTo(status: string): void {
    this.accountService.updateStatus({ id: this.id, newStatus: status });
  }
}
