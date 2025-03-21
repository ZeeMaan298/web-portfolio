import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  
    isLoggedIn = false;
  
    constructor(private authService: AuthService) {}
  
    ngOnInit() {
      this.authService.isLoggedIn$.subscribe(status => {
        this.isLoggedIn = status;
      });
    }
  
    logout() {
      this.authService.logout();
    }
  
  // isLoggedIn = false;
  // private platformId = inject(PLATFORM_ID); // ✅ Inject platform ID

  // constructor(private authService: AuthService) {
  //   if (isPlatformBrowser(this.platformId)) {
  //     // ✅ Only access localStorage if running in the browser
  //     this.isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
  //   }
  // }

  // loginUser() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     localStorage.setItem('userLoggedIn', 'true');
  //     this.isLoggedIn = true;
  //   }
  // }

  // logoutUser() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     localStorage.removeItem('userLoggedIn');
  //     this.isLoggedIn = false;
  //   }
  // }
  name = '';
  email = '';
  subject = '';
  message = '';

  sendMessage(event: Event) {
    event.preventDefault(); // Prevents form from refreshing the page

    console.log('Form Values:', {
      name: this.name.trim(),
      email: this.email.trim(),
      subject: this.subject.trim(),
      message: this.message.trim()
    });

    if (
      !this.name.trim() ||
      !this.email.trim() ||
      !this.subject.trim() ||
      !this.message.trim() ||
      this.name.length < 2 ||
      this.subject.length < 2 ||
      this.message.length < 5
    ) {
      alert('Please fill in all fields with meaningful information.');
      return;
    }

    console.log('Message Sent:', {
      name: this.name.trim(),
      email: this.email.trim(),
      subject: this.subject.trim(),
      message: this.message.trim(),
    });

    alert('Your message has been sent!');

    // Clear input fields after submission
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}