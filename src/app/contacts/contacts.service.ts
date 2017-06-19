import {Contact} from "./contact.model";
import {EventEmitter, Output} from "@angular/core";
import {MOCKCONTACTS} from "./MOCKCONTACTS";

export class ContactsService {
  @Output() contactSelectedEvent = new EventEmitter<Contact>();
  @Output() contactsChangedEvent = new EventEmitter<Contact[]>();

  contacts: Contact[] = [];

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts() : Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    for (var i=0;i<this.contacts.length;i++) {
      if (this.contacts[i].id === id) {
        return this.contacts[i];
      }
    }
    return null;

  }

  deleteContact(contact: Contact) {
    if (contact === null) {
      return;
    }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0){
      return;
    }

    this.contacts.splice(pos, 1);
    this.contactsChangedEvent.emit(this.contacts.slice());
  }
}
