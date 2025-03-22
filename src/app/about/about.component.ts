import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private http: HttpClient,private authService: AuthService, private snackBar: MatSnackBar) {}
 
 isLoggedIn=false;
 
  aboutData = {
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelidia.',
    name: 'Clark Thompson',
    dateOfBirth: 'January 01, 1987',
    address: 'San Francisco CA 97987 USA',
    zipCode: '1000',
    email: 'clarkthomp@gmail.com',
    phone: '+1-2234-5678-9-0',
    projectsCompleted: 120
  };

  ngOnInit() {
    this.authService.getLoginStatus().subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  downloadCV() {

    if (!this.isLoggedIn) {
      this.showToastMessage(); // Show login message if not logged in
      return;
    }
    const fileUrl = '/cv/Zainab_Akbar_Resume298.pdf'; // Ensure correct path
  
    // Check if the file exists before attempting download
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', fileUrl, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // File exists, proceed with download
          const link = document.createElement('a');
          link.href = fileUrl;
          link.setAttribute('download', 'Zainab_Akbar_CV.pdf'); // Set proper filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // File does not exist, show error
          alert('Error: CV file not found or incorrect path!');
          console.error('File not found:', fileUrl);
        }
      }
    };
    xhr.send();
    
  }
  

  showToastMessage() {
    this.snackBar.open('Please ask Zainab for login', 'Close', {
      duration: 3000, // 3 seconds
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  
  
}
}
