import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false; // To track menu state
  isLoggedIn= false;  //for login information
  

  constructor(private dialog: MatDialog, private authService: AuthService) {}


ngOnInit() {
    // Subscribe to login state changes
    this.authService.getLoginStatus().subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
  toggleMenu(event: Event) {
    event.stopPropagation(); // Prevent immediate closing
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const targetElement = event.target as HTMLElement | null;

    if (!targetElement) return; // Prevents errors if event.target is null

    if (!targetElement.closest('.menu-button') && !targetElement.closest('.mobile-menu')) {
      this.menuOpen = false;
    }
  }
 
 
  logout() {
    this.authService.logout(); // Call logout function
  }



  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      disableClose: true, // Prevent closing when clicking outside
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User logged in with:', result);
      }
    });
  }

}


