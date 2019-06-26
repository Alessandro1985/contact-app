import { Component, OnInit } from '@angular/core';
import { ContactsService } from './node_modules/src/app/services/contacts.service'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: any = [];
  isLoaded = false;

  constructor(
    private Contact: ContactsService,
  ) { }

  ngOnInit() {
    this.Contact.getContacts().subscribe(
      (data) => this.contacts = data,
      (err) => console.debug(err),
      () => this.isLoaded = true
    )
  }

}
