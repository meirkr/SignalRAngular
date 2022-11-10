import { Component } from '@angular/core';
import { ChatLoginComponent } from '../login/chatLogin.component';
import { ChatLoginService } from '../login/chatLogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SignalRAngular';
}
