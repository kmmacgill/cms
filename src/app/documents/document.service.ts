import {Document} from "./document.model";
import {EventEmitter, Output} from "@angular/core";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import { Subject } from 'rxjs/Subject';
import {isUndefined} from "util";

export class DocumentsService {
  @Output() documentSelectedEvent = new EventEmitter<Document>();
  DocumentListChangedEvent = new Subject<Document[]>();

  documents: Document[] = [];
  maxDocId: number;

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocId = this.getMaxId();
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

  getMaxId() : number {
    let maxId = 0;

    for (let i = 0; i < this.documents.length; i++) {
      let currentId = parseInt(this.documents[i].id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addDocument(newDocument: Document) {
    if (newDocument === null || isUndefined(newDocument)){
      return;
    }

    this.maxDocId++;
    newDocument.id = this.maxDocId.toString();
    this.documents.push(newDocument);
    var clone: Document[] = this.documents.slice();
    this.DocumentListChangedEvent.next(clone);
  }

  deleteDocument(docum: Document) {
    if (docum === null || isUndefined(docum)) {
      return;
    }

    const pos = this.documents.indexOf(docum);
    if (pos < 0){
      return;
    }

    this.documents.splice(pos, 1);
    let clone: Document[] = this.documents.slice();
    this.DocumentListChangedEvent.next(clone);
  }

  updateDocument(original: Document, newDoc: Document) {
    if (original === null || isUndefined(original) || newDoc === null || isUndefined(newDoc)) {
      return;
    }
    const pos = this.documents.indexOf(original);
    if (pos < 0) {
      return;
    }
    newDoc.id = original.id;
    this.documents[pos] = newDoc;
    var clone: Document[] = this.documents.slice();
    this.DocumentListChangedEvent.next(clone);
  }
}
