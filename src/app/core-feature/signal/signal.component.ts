import {
  Component,
  computed,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
})
export class SignalComponent {
  //? what are signals?
  // also called as reactive variables
  // signal also called as a wrapper around a value which keeps track of the value and the changes to the value
  // signals are reactive variables that are used to store and update data in Angular.
  // they are used to store and update data in Angular.
  // when we want to run a function when a signal is updated we use effect

  count: WritableSignal<number> = signal<number>(0);
  normalCount = 0;

  //? this is read only signal
  // computed signals are the predefined values , we can't change the value of computed signals, it only changes when the predefined value on which it is dependent on changes
  // read only
  // this can be only changed when the value on which it is dependent on changes
  count2 = computed(() => 100);

  //? effect is a function that automatically runs whenever any signal it references changes
  // it's like setting up an automatic reaction to signal updates
  // useful for side effects like logging, API calls, or DOM updates
  constructor() {
    effect(() => {
      console.log(this.count());
    });
  }

  increment() {
    this.count.update((prev) => prev + 1);
    //* in the case value cannot be updated
    //? we use update method when there is only one data type but when there is multiple data type we use set method
    // this.count2.update((prev) => prev + 1);
    // this.count2.set(this.count() + 1);
    this.normalCount++;
  }

  decrement() {
    this.count.update((prev) => prev - 1);
    this.normalCount--;
  }
}
