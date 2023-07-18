import { Component, OnInit } from '@angular/core';
import { AccountsService } from './shared/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountsService] // Add if you want a new instance of the AccountService to be injected for this component and its children components
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];
  
  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
