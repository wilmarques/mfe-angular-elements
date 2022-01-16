import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'contacts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public contacts = of([
    {
      id: 1,
      firstName: 'First',
      lastName: 'Contact',
      description: 'This is the First Contact',
    },
    {
      id: 2,
      firstName: 'Second',
      lastName: 'Contact',
      description: 'This is the Second Contact',
    },
    {
      id: 3,
      firstName: 'Third',
      lastName: 'Contact',
      description: 'This is the Third Contact',
    },
  ]);
}
