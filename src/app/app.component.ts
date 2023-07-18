import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: { name: string, status: string }[] = [
    { name: "Master Account", status: "active" },
    { name: "Test Account", status: "inactive" },
    { name: "Hidden Account", status: "unknown" }
  ];

  onAccountAdded(account: { name: string, status: string }): void {
    this.accounts.push(account);
  }

  onStatusChanged(updatedInfo: { id: number, newStatus: string }): void {
    this.accounts[updatedInfo.id].status = updatedInfo.newStatus;
  }
}
