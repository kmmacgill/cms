import {Component, OnDestroy, OnInit} from '@angular/core';
import {Document} from "../document.model";
import {DocumentsService} from "../document.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  private subscription: Subscription;

  constructor(private documentService: DocumentsService) { }

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
    this.subscription = this.documentService.DocumentListChangedEvent.subscribe(
      (documentsList: Document[]) => {
        this.documents = documentsList;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
