import { Component, OnInit } from '@angular/core';
import {Document} from '../document.model';
import {DocumentsService} from "../document.service";
import {Params, Router, ActivatedRoute} from "@angular/router";
import {isUndefined} from "util";
import {NgForm} from "@angular/forms";

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

  onSubmit(form: NgForm) {
    let values = form.value;
    let newDocument: Document = new Document(
      values.id,
      values.name,
      values.url,
      values.description,
      values.children
    );

    if (this.editMode === true) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }

    this.router.navigate(["../documents"]);
  }

  onCancel() {
    this.router.navigate(["../documents"]);
  }

}
