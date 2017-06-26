import {Contact} from "./contact.model";
import {EventEmitter, Output} from "@angular/core";
import {MOCKCONTACTS} from "./MOCKCONTACTS";
import {Subject} from "rxjs/Subject";
import {isUndefined} from "util";

export class ContactsService {
  @Output() contactSelectedEvent = new EventEmitter<Contact>();
  @Output() contactsChangedEvent = new EventEmitter<Contact[]>();
  ContactListChangedEvent = new Subject<Contact[]>();
  contacts: Contact[] = [];
  maxConId: number;
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

  getMaxId() : number {
    let maxId = 0;

    for (let i = 0; i < this.contacts.length; i++) {
      let currentId = parseInt(this.contacts[i].id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  updateContact(original: Contact, newCon: Contact) {
    if (original === null || isUndefined(original) || newCon === null || isUndefined(newCon)) {
      return;
    }
    const pos = this.contacts.indexOf(original);
    if (pos < 0) {
      return;
    }
    newCon.id = original.id;
    this.contacts[pos] = newCon;
    let clone = this.contacts.slice();
    this.ContactListChangedEvent.next(clone);
  }

  addContact(newCon: Contact) {
    if (newCon === null || isUndefined(newCon)){
      return;
    }

    this.maxConId++;
    newCon.id = this.maxConId.toString();
    this.contacts.push(newCon);
    let clone = this.contacts.slice();
    this.ContactListChangedEvent.next(clone);
  }

  deleteContact(contact: Contact) {
    if (contact === null || isUndefined(contact)) {
      return;
    }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0){
      return;
    }

    this.contacts = this.contacts.splice(pos, 1);
    let clone = this.contacts.slice();
    this.ContactListChangedEvent.next(clone);
  }
}
