import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    new Contact(543, 'Bro. Jackson', 'jacksonk@byui.edu', 2084963771, 'https://web.byui.edu/Directory/Employee/jacksonk.jpg', null),
    new Contact(583, 'Bro. Barzee', 'barzeer@byui.edu', 2084963768, 'https://web.byui.edu/Directory/Employee/barzeer.jpg', null),
    new Contact(583, 'Bro. Ross', 'Rossbob@byui.edu', 2084456953, 'http://www.nndb.com/people/100/000099800/BobRossPic.jpg', null)
  ];

  constructor() { }
  ngOnInit() {
  }

}
