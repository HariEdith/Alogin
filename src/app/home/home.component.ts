import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: { name: string, email: string, password: string }[] = [];

  onLogin(loginData: { email: string, password: string }): void {
    const { email, password } = loginData;
    console.log('resived logindata ', loginData);
  }

  onRegister(registerData: { name: string, email: string, password: string }): void {
    this.users.push(registerData);
    console.log('User registered:', registerData);
  }
}
