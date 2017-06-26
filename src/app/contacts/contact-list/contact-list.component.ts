import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactsService} from "../contacts.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  private subscription: Subscription;
  constructor(private contactService: ContactsService) { }
  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.subscription = this.contactService.ContactListChangedEvent.subscribe(
      (contactList: Contact[]) => {
        this.contacts = contactList;
      }
    );
    this.contactService.contactsChangedEvent.subscribe((cons: Contact[]) => {
      this.contacts = cons;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
