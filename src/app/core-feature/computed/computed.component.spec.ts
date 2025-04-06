import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputedComponent } from './computed.component';

describe('ComputedComponent', () => {
  let component: ComputedComponent;
  let fixture: ComponentFixture<ComputedComponent>;

  //? Computed properties in Angular 19 are a new feature that allows for reactive,
  // cached calculations based on component state. They work as follows:
  //
  // 1. They're defined using the 'computed' function from '@angular/core'
  // 2. They automatically track dependencies (signals, observables, etc.)
  // 3. They only recalculate when their dependencies change
  // 4. Results are cached until dependencies update
  // 5. They're perfect for derived state that depends on other values
  //
  // Example usage:
  // fullName = computed(() => this.firstName() + ' ' + this.lastName());
  //
  // This creates efficient, reactive data transformations without manual subscription
  // management or change detection optimization.

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComputedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
