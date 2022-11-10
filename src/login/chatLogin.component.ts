import { Component } from '@angular/core';
import { ChatLoginService } from './chatLogin.service';
import { FormsModule } from '@angular/forms'; // I added manually

@Component({
  selector: 'chatLogin',
  templateUrl: './chatLogin.component.html',
})

export class ChatLoginComponent {
    nickName = "";
    loggedIn = false;

    constructor(private ChatLoginService:ChatLoginService) {

    }

    public doLogin(): void {
      if (this.nickName.length > 0) {
        console.log(`logged in as ${this.nickName}`);

        this.loggedIn = true;
        this.ChatLoginService.updateLoggedIn(this.nickName);
      }
    }
}