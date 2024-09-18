import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  constructor() { }

  isLoggedIn() {
    return this.loggedIn;
  }

  login() {
      this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
