import {Component, Input, OnInit} from '@angular/core';
import {ContactsService} from "../../contacts/contacts.service";
import {Contact} from "../../contacts/contact.model";
import {MessageService} from "../message.service";
import {Message} from "../message.model";

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() msg: Message;
  msgSender: string;

  constructor(private conService: ContactsService) { }

  ngOnInit() {
    let con = this.conService.getContact(this.msg.id); //whilst debugging this line sometimes returns null, it's
    //inconsistent however and is working half the time i test it though. not sure why this is happening.
    this.msgSender = con.name;
  }

}
