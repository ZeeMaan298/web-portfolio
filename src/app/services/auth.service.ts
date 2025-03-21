import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false); // Keeps login state in memory
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {}

  login() {
    console.log('AuthService: User logged in'); // Debugging log
    this.isLoggedInSubject.next(true);
  }

  logout() {
    console.log('AuthService: User logged out'); // Debugging log
    this.isLoggedInSubject.next(false);
  }

  getLoginStatus(): Observable<boolean> {
    return this.isLoggedIn$; // Provide current login state as observable
  }
}
