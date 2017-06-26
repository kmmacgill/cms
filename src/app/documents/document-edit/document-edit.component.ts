///<reference path="../../../../node_modules/rxjs/Observable.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {DocumentsService} from "../document.service";
import {Params, Router, ActivatedRoute} from "@angular/router";
import {isUndefined} from "util";

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  document: Document;
  originalDocument: Document;
  editMode: boolean = false;

  constructor(private documentService: DocumentsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params)=> {
          let id = +params['id'].toString();

          if (id === null || isUndefined(id)) {
            this.editMode = false;
            return;
          }

          this.originalDocument = this.documentService.getDocument(id.toString());
          if(this.originalDocument === null || isUndefined(this.originalDocument)) {
            return;
          }

          this.editMode = true;
          this.document = JSON.parse(JSON.stringify(this.originalDocument));
        }
      );
  }

}
