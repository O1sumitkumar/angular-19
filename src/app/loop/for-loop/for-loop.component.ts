import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css',
})
export class ForLoopComponent {
  users: string[] = ['Jon', 'Sumeet', 'Arul', 'tommy'];
  employeeData: { id: number; name: string; age: number; city: string }[] = [
    {
      id: 1,
      name: 'Jon Doe',
      age: 25,
      city: 'New York',
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 30,
      city: 'Los Angeles',
    },
    {
      id: 3,
      name: 'John Smith',
      age: 35,
      city: 'Chicago',
    },
    {
      id: 4,
      name: 'Jane Smith',
      age: 40,
      city: 'Chicago',
    },
  ];

  getEmployeeData(employee: any) {
    console.log(employee);
  }
}
