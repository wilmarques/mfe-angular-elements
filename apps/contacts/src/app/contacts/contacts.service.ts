import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Array<Contact> = [
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
  ];

  public getAll(): Observable<Array<Contact>> {
    return of(this.contacts);
  }

  public editContact(originalContactId: number, newContactData: Contact): void {
    this.contacts = this.contacts.map((contact) => {
      if (contact.id === originalContactId) {
        return this.replaceContactData(contact, newContactData);
      }
      return contact;
    });
  }

  private replaceContactData(
    originalContact: Contact,
    newContactData: Contact,
  ): Contact {
    return {
      ...originalContact,
      ...newContactData,
      id: originalContact.id,
    };
  }
}
