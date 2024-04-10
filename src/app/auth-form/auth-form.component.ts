import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  formType: 'login' | 'signup' = 'login';
  formData = {
    email: '',
    password: ''
  };

  submitForm() {
    if (this.formType === 'login') {
      // Handle login form submission
      console.log('Login form submitted with data:', this.formData);
    } else {
      // Handle sign up form submission
      console.log('Sign up form submitted with data:', this.formData);
    }
  }

  toggleForm(type: 'login' | 'signup') {
    this.formType = type;
    this.formData = {
      email: '',
      password: ''
    };
  }
}
