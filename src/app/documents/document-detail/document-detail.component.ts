import {Component, OnInit} from '@angular/core';
import {Document} from '../document.model';
import {DocumentsService} from "../document.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WindRefService} from "../../wind-ref.service";

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  nativeWindow: any;
  document: Document;
  id: number;
  constructor(private documentService: DocumentsService,
              private route: ActivatedRoute,
              private router: Router,
              private windRefService: WindRefService) {
    this.nativeWindow = this.windRefService.getNativeWindow();
  }

  onView() {
    if(this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params)=> {
          this.id = +params['id'].toString();
          this.document = this.documentService.getDocument(this.id.toString());
        }
      );
  }

  onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(["../documents"]);
  }
}
