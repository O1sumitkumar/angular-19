import { Component } from '@angular/core';

@Component({
  selector: 'app-input-events',
  imports: [],
  templateUrl: './input-events.component.html',
  styleUrl: './input-events.component.css',
})
export class InputEventsComponent {
  email: string = '';
  name: string = '';
  password: string = '';

  onInput(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onEmailInput(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  onPasswordInput(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.name, this.email, this.password);
  }
}
