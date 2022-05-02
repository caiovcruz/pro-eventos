import { Component } from '@angular/core';
import { User } from './models/identity/User';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  public setCurrentUser(): void {
    let user = JSON.parse(localStorage.getItem('user')!) as User;

    if (user)
      this.accountService.setCurrentUser(user);
  }
}
