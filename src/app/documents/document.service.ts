import {Document} from "./document.model";
import {EventEmitter, Output} from "@angular/core";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";

export class DocumentsService {
  @Output() documentSelectedEvent = new EventEmitter<Document>();
  @Output() documentChangedEvent = new EventEmitter<Document[]>();

  documents: Document[] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments() : Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    for (let i=0;i<this.documents.length;i++) {
      if (this.documents[i].id === id) {
        return this.documents[i];
      }
    }
    return null;
  }

  deleteDocument(docum: Document) {
    if (docum === null) {
      return;
    }

    const pos = this.documents.indexOf(docum);
    if (pos < 0){
      return;
    }

    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
  }
}
