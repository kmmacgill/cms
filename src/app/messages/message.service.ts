import {Message} from "./message.model";
import {EventEmitter, Injectable, Output} from "@angular/core";
import {MOCKMESSAGES} from "./MOCKMESSAGES";
import {Http, Response} from "@angular/http";
import 'rxjs/RX';

@Injectable()
export class MessageService {
  messageChangeEvent = new EventEmitter<Message[]>();
  maxMessageId: number;
  messages: Message[] = [];

  constructor(private http:Http) {
    this.initMessages();
  }

  getMessages() : Message[] {
    return this.messages.slice();
  }

  getMaxId() : number {
    let maxId = 0;

    for (let i = 0; i < this.messages.length; i++) {
      let currentId = parseInt(this.messages[i].id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
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
    var clone: Message[] = this.messages.slice();
    this.storeMessages(clone).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  initMessages() {
    this.http.get('https://cit301c-server.firebaseio.com/messages.json')
      .map(
        (response: Response) =>{
          return response.json();
        }
      )
      .subscribe(
        (response: Message[]) => {
          this.messages = response;
          this.maxMessageId = this.getMaxId();
          this.messageChangeEvent.emit(this.messages.slice());
        }
      );
  }

  storeMessages(value: Message[]) {
    return this.http.put('https://cit301c-server.firebaseio.com/messages.json', value);
  }
}
