import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Output() register: EventEmitter<{ name: string, email: string, password: string, age: number, mobileNumber: string }> = new EventEmitter<{ name: string, email: string, password: string, age: number, mobileNumber: string }>();

  onRegister(registerForm: NgForm): void {
    if (registerForm.valid) {
      const { name, email, password, age, mobileNumber } = registerForm.value;

      // All fields required
      if (!name || !email || !age || !password || !mobileNumber) {
        console.log('All fields are required.');
      }

      // A-z
      if (!this.validateName(name)) {
        console.log('Please enter a valid Name.');
      }

      // min
      if (!this.validateAge(age)) {
        console.log('Minimum age required is 18.');

      }

      // Email 
      if (!this.validateEmail(email)) {
        console.log('Please enter a valid Email.');
      }

      // Password 
      if (!this.validatePassword(password)) {
        console.log('Password must have minimum 8 characters and at least one special character.');
      }

      // 10 min max
      if (!this.validateMobileNumber(mobileNumber)) {
        console.log('Mobile number must contain exactly 10 digits.');

      }

      // Emitting registration details
      this.register.emit({ name, email, password, age, mobileNumber });
      registerForm.reset();
    } else {
      console.log('All fields are required.');
    }
  }

  validateName(name: string): boolean {
    
    if (!/^[A-Za-z]+$/.test(name)) {
      return false;
    }
    return true;
  }

  validateAge(age: number): boolean {
    
    if (age < 18) {
      return false;
    }
    return true;
  }

  validateEmail(email: string): boolean {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return false;
    }
    return true;
  }

  validatePassword(password: string): boolean {
    if (!/^(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
      return false;
    }
    return true;
  }

  validateMobileNumber(mobileNumber: string): boolean {
    if (!/^\d{10}$/.test(mobileNumber)) {
      return false;
    }
    return true;
  }
}