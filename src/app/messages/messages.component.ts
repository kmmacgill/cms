import { Component, OnInit } from '@angular/core';
import {MessageService} from "./message.service";
import {ContactsService} from "../contacts/contacts.service";
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessageService, ContactsService]
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
