import {Message} from "./message.model";
import {EventEmitter, Output} from "@angular/core";
import {MOCKMESSAGES} from "./MOCKMESSAGES";

export class MessageService {
  messageChangeEvent = new EventEmitter<Message[]>();

  messages: Message[] = [];

  constructor() {
    this.messages = MOCKMESSAGES;
  }

  getMessages() : Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    for (let i=0;i<this.messages.length;i++) {
      if (this.messages[i].id === id) {
        return this.messages[i];
      }
    }
    return null;
  }

  addMessage (msg: Message) {
    this.messages.push(msg);
    this.messageChangeEvent.emit(this.messages.slice());
  }
}
