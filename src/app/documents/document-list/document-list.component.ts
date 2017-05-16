import { Component, OnInit } from '@angular/core';
import {Document} from "../document.model";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  docs: Document[] = [
    new Document(123, 'Document1', 'The first Document', null, null),
    new Document(123, 'Document2', 'The second Document', null, null),
    new Document(123, 'Document3', 'The third Document', null, null),
    new Document(123, 'Document4', 'The fourth Document', null, null),
    new Document(123, 'Document5', 'The fifth Document', null, null),
    new Document(123, 'Document6', 'The sixth Document', null, null),
    new Document(123, 'Document7', 'The seventh Document', null, null)


  ];

  constructor() { }

  ngOnInit() {
  }

}
