import { Component } from '@angular/core';

@Component({
  selector: 'app-control-statement',
  imports: [],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css',
})
export class ControlStatementComponent {
  isGreen: boolean = true;
  isRed: boolean = false;
  color: string = 'black';

  //? What are control statement in angular ?
  // Control statements in Angular are template syntax features that allow conditional rendering
  // and iteration in templates. They include:
  // 1. @if/@else - For conditional rendering of elements
  // 2. @switch/@case/@default - For multiple conditional branches
  // 3. @for - For iterating over collections with contextual variables like $index, $first, $last
  // 4. @empty - Used with @for to handle empty collections
  // These statements help create dynamic templates that respond to component state.

  toggleGreen() {
    this.isGreen = !this.isGreen;
  }

  toggleRed() {
    this.isRed = !this.isRed;
  }

  setColor(color: string) {
    this.color = color;
  }
}
