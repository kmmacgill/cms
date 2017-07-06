import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "./contact.model";
import {isUndefined} from "util";

@Pipe({
  name: 'contactsFilter'
})
export class ContactsFilterPipe implements PipeTransform {

  transform(contacts: Contact[], filterTerm: string): any {
    if (contacts.length === 0 || isUndefined(filterTerm)) {
      return contacts;
    }
    let filteredArray = contacts.filter(
      (contact: any) => contact.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
    if (filteredArray.length < 1) {
      return contacts;
    }
    return filteredArray;
  }

}
