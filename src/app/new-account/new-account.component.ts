import { Component } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {

  constructor(private accountService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string): void {
    this.accountService.addAccount({ name: accountName, status: accountStatus });
  }
}
