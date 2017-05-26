import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from "../document.model";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document(1, 'Document1', 'The first Document', 'https://www.google.com/', null),
    new Document(2, 'Document2', 'The second Document', 'https://www.google.com/', null),
    new Document(3, 'Document3', 'The third Document', 'https://www.google.com/', null)
  ];

  constructor() { }
  ngOnInit() { }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
