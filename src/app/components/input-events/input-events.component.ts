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

  //? Type declaration for event parameters is important because:
  // 1. TypeScript needs to know the event is of type Event to access properties like 'target'
  // 2. Without proper typing, TypeScript can't verify we're using correct properties/methods
  // 3. We need to cast (event.target as HTMLInputElement) to access the 'value' property
  // 4. Type safety prevents runtime errors by catching type mismatches during development
  // 5. It provides better IDE autocompletion and documentation

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
