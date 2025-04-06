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
