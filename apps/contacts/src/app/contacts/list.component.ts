import { Component } from '@angular/core';

import { ContactsService } from './contacts.service';

@Component({
  selector: 'contacts-list',
  template: `
    <h2>Contacts</h2>

    <details *ngFor="let contact of contactsService.listAll() | async">
      <summary>{{ contact.firstName }} {{ contact.lastName }}</summary>
      <article>
        {{ contact.description }}
        <footer>
          <a [routerLink]="['edit', contact.id]">Edit</a>
        </footer>
      </article>
    </details>
  `,
})
export class ListComponent {
  constructor(public readonly contactsService: ContactsService) {}
}
