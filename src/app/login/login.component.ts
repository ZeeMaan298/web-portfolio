import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Inject, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = signal(false);
  errorMessage = signal<string | null>(null);

  private defaultEmail = 'admin@example.com';
  private defaultPassword = 'password123';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    if (email === this.defaultEmail && password === this.defaultPassword) {
      console.log('Login successful', email);
      this.authService.login(); 
      this.dialogRef.close({ success: true, email });
    } else {
      this.errorMessage.set(
        "You Are not allowed to login by Yourself Ask Zainab Akbar for Login and passwords"
      );

      // ✅ Fix: Use an arrow function to ensure context is maintained
      setTimeout(() => {
        this.errorMessage.set(null); 
      }, 5000);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

