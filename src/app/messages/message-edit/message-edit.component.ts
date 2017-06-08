import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from "../message.model";
import {MessageService} from "../message.service";
import {toBase64String} from "@angular/compiler/src/output/source_map";

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

  constructor(private msgServer: MessageService) { }

  ngOnInit() {
  }

  onSendMessage() {
    const msgSub = this.subject.nativeElement.value;
    const msgTxt = this.msgText.nativeElement.value;
    var id = (Math.floor(Math.random() * 18) + 1).toString();
    const newmsgSubnTxt = new Message(id, msgSub, msgTxt, this.currentSender);
    this.msgServer.addMessage(newmsgSubnTxt);
  }

  onClear() {
    this.subject.nativeElement.value = "";
    this.msgText.nativeElement.value = "";
  }

}
