import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})

//? Classes in Angular/TypeScript:
// Classes are blueprints for creating objects with specific properties and methods.
// In Angular, we use classes in several ways:
// 1. Component classes: Like this CounterComponent that handles UI logic
// 2. Service classes: For shared functionality and data across components
// 3. Directive classes: To modify DOM behavior
// 4. Pipe classes: For data transformation in templates
// 5. Guard classes: For route protection
//
//? The 'this' keyword refers to the current instance of the class and can be used to:
// 1. Access class properties (this.count)
// 2. Call class methods (this.increment())
// 3. Pass the current instance to other functions
// 4. Access parent class members when using inheritance

//? Constructor in Angular/TypeScript:
// The constructor is a special method that gets called when a new instance of a class is created.
// It's used for initialization tasks and dependency injection in Angular.
//
//? Key points about constructors:
// 1. Automatically called when an object is instantiated
// 2. Used to initialize class properties
// 3. In Angular, used for dependency injection (services, etc.)
// 4. Cannot be async or return values
//
//* Example:
//   constructor(private http: HttpClient) {
//     this.initializeData();
//   }
//
//? Other important class concepts:
// - Access modifiers: public, private, protected control visibility
// - Static members: belong to the class itself, not instances
// - Inheritance: extends keyword allows a class to inherit from another
// - Interfaces: define contracts that classes can implement
// - Decorators: like @Component, @Injectable add metadata to classes
export class CounterComponent {
  count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
