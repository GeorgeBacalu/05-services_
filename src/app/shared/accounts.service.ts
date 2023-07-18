import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({ providedIn: 'root' }) // Services can be loaded lazily by Angular (behind the scenes) and redundant code can be removed automatically.
export class AccountsService {
  accounts: { name: string, status: string }[] = [
    { name: "Master Account", status: "active" },
    { name: "Test Account", status: "inactive" },
    { name: "Hidden Account", status: "unknown" }
  ];

  constructor(private loggingService: LoggingService) { }

  addAccount(account: { name: string, status: string }): void {
    this.accounts.push(account);
    this.loggingService.logStatusChange(account.status);
  }

  updateStatus(updatedInfo: { id: number, newStatus: string }): void {
    const { id, newStatus } = updatedInfo;
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
