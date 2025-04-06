import { Component } from '@angular/core';

@Component({
  selector: 'app-computed',
  imports: [],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.css',
})
export class ComputedComponent {
  a = 10;
  b = 20;
  c = this.a + this.b;

  getUpdatedValue() {
    console.log('current value', this.a);
    this.a = 20;
    console.log('finaleValue', this.c);
  }
}
