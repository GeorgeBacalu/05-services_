import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // providers: [AccountsService, LoggingService], // With Angular 6+ application-wide services can be provided by passing an argument to the @Injectable decorator at the service class level ({ providedIn: 'root' })
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
