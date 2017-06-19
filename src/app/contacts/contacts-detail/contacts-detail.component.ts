import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactsService} from "../contacts.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact: Contact;
  id: number;
  constructor(private contactService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params)=> {
          this.id = +params['id'].toString();
          this.contact = this.contactService.getContact(this.id.toString());
        }
      );
  }

  onDelete() {
    this.contactService.deleteContact(this.contact);
    this.router.navigate(["../contacts"]);
  }
}
