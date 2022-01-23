import { Component } from '@angular/core';

import { ContactsService } from './contacts/contacts.service';

@Component({
  selector: 'contacts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly contactsService: ContactsService) {}

  public contacts = this.contactsService.getAll();
}
