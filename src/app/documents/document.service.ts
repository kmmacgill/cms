import {Document} from "./document.model";
import {EventEmitter, Output} from "@angular/core";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";

export class DocumentsService {
  @Output() documentSelectedEvent = new EventEmitter<Document>();

  documents: Document[] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments() : Document[] {
    return this.documents.slice();
  }

  getContact(id: string): Document {
    for (let i=0;i<this.documents.length;i++) {
      if (this.documents[i].id === id) {
        return this.documents[i];
      }
    }
    return null;
  }

}
