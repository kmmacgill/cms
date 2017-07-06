import {Contact} from "./contact.model";
import {EventEmitter, Injectable, Output} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {isUndefined} from "util";
import {Http, Response} from "@angular/http";
import 'rxjs/RX';

@Injectable()
export class ContactsService {
  @Output() contactSelectedEvent = new EventEmitter<Contact>();
  ContactListChangedEvent = new Subject<Contact[]>();
  contacts: Contact[] = [];
  maxConId: number;
  constructor(private http:Http) {
    this.initContacts();
  }

  getContacts() : Contact[] {
    this.initContacts();
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
    let clone: Contact[] = this.contacts.slice();
    this.storeContacts(clone).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  addContact(newCon: Contact) {
    if (newCon === null || isUndefined(newCon)){
      return;
    }

    this.maxConId++;
    newCon.id = this.maxConId.toString();
    this.contacts.push(newCon);
    let clone: Contact[] = this.contacts.slice();
    this.storeContacts(clone).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  deleteContact(contact: Contact) {
    if (contact === null || isUndefined(contact)) {
      return;
    }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0){
      return;
    }

    this.contacts.splice(pos, 1);
    let clone = this.contacts.slice();
    this.storeContacts(clone).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  initContacts() {
    this.http.get('https://cit301c-server.firebaseio.com/contacts.json')
      .map(
        (response: Response) =>{
          return response.json();
        }
      )
      .subscribe(
        (response: Contact[]) => {
          this.contacts = response;
          this.maxConId = this.getMaxId();
          this.ContactListChangedEvent.next(this.contacts.slice());
        }
      );
  }

  storeContacts(value: Contact[]) {
    return this.http.put('https://cit301c-server.firebaseio.com/contacts.json', value);
  }
}
