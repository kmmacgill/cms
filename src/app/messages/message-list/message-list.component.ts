import { Component, OnInit } from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message(123, 'testing', 'testing testing 123', 'Bob'),
    new Message(456, 'testing', 'testing testing 456', 'Bob'),
    new Message(789, 'testing', 'testing testing 789', 'Bob'),
    new Message(567, 'testing', 'testing testing 101112', 'Bob'),
    new Message(345, 'testing', 'testing testing 131415', 'Bob'),
    new Message(678, 'testing', 'testing testing 161718', 'Bob'),
    new Message(901, 'testing', 'testing testing 192021', 'Bob'),
    new Message(234, 'testing', 'testing testing 222324', 'Bob')
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
