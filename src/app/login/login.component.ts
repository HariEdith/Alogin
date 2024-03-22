import { Component,  Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() users: { name: string, email: string, password: string }[] = [];
  

  onLogin(loginForm: NgForm): void {
    if (loginForm.valid) {
      const { email, password } = loginForm.value;
      
      let user = null;
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email === email && this.users[i].password === password) {
          user = this.users[i];
          console.log('Login success');
          break; 
        }
        else{console.log('Login failed');}
      }
    }
  }
}