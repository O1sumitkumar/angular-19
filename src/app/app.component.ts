import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CounterComponent } from './components/counter/counter.component';
import { InputEventsComponent } from './components/input-events/input-events.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { ForLoopComponent } from './loop/for-loop/for-loop.component';
import { SignalComponent } from './core-feature/signal/signal.component';
import { ComputedComponent } from './core-feature/computed/computed.component';
import { ContextualVariableComponent } from './loop/contextual-variable/contextual-variable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContextualVariableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app-standalone';
  todos = ['Buy groceries', 'Finish Angular course', 'Learn TypeScript'];
  name = 'John Doe';
  greeting() {
    return `Hello ${this.name}`;
  }
  greetInConsole() {
    console.warn('Hello World! from Angular Function');
  }
}
