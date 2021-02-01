import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginsSuccess, User } from './state/actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  login() {
    const user: User = {
      username: 'username',
      role: 'admin',
    };
    this.store.dispatch(loginsSuccess({ user }));
  }
}
