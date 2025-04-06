import { Component } from '@angular/core';

@Component({
  selector: 'app-contextual-variable',
  imports: [],
  templateUrl: './contextual-variable.component.html',
  styleUrl: './contextual-variable.component.css',
})
export class ContextualVariableComponent {
  //? What are contextual variables?
  // Contextual variables are special variables available within Angular templates
  // that provide access to data from the current context, like loop indices,
  // the current item in a loop, or other contextual information.
  // They are commonly used in *ngFor directives to access the current item,
  // index, first/last status, etc.

  // for example we have a list of users name
  // users: string[] = ['Jon', 'Vinod', 'Ashish', 'Ravi', 'Chunni'];
  users: string[] = [];
}
