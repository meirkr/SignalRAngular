import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // I added manually
import { AppComponent } from './app.component';

import { ChatLoginComponent } from '../login/chatLogin.component';
import { ChatLoginService } from '../login/chatLogin.service';
import { ChatMessagesComponent } from '../chatMessages/chatMessages.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatLoginComponent,
    ChatMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // I added manually
  ],
  providers: [ChatLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
