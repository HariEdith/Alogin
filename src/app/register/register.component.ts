import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @Output() register: EventEmitter<{ name: string, email: string, password: string }> = new EventEmitter<{ name: string, email: string, password: string }>();

  onRegister(registerForm: NgForm): void {
    if (registerForm.valid) {
      const { name, email, password } = registerForm.value;
      this.register.emit({ name, email, password });
      registerForm.reset();
    }
  }
}
