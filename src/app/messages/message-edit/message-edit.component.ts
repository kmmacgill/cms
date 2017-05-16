import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  currentSender = "Korey";
  @ViewChild('subjectInput') subject: ElementRef;
  @ViewChild('msgInput') msgText: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor() { }

  ngOnInit() {
  }

  onSendMessage() {
    const msgSub = this.subject.nativeElement.value;
    const msgTxt = this.msgText.nativeElement.value;
    const newmsgSubnTxt = new Message(Math.floor(Math.random() * 10000) + 1, msgSub, msgTxt, this.currentSender);
    this.addMessageEvent.emit(newmsgSubnTxt);
  }

  onClear() {
    this.subject.nativeElement.value = "";
    this.msgText.nativeElement.value = "";
  }

}
