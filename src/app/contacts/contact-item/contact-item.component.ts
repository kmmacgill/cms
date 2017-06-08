import {Component, OnInit, Input } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "../contact.model";

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() connie: Contact;

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
  }

  onSelected() {
    this.contactService.contactSelectedEvent.emit(this.connie);
  }

}
