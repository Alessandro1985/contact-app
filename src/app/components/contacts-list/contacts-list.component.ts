import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactsService } from 'src/app/services/contacts.service';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: any = [];
  info: any = [];
  isContactLoaded = false;
  isInfoLoaded = false;
  contactId: number;

  constructor(
    private Contact: ContactsService,
    private Info: InfoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.Contact.getContacts().subscribe(
      (data) => this.contacts = data,
      (err) => console.debug(err),
      () => this.isContactLoaded = true
    );

    this.Info.getInfo().subscribe(
      (data) => this.info = data,
      (err) => console.debug(err),
      () => this.isInfoLoaded = true
    );
  }

  getRoleName(roleId: number) {
    return this.info.filter((item) => item.id === roleId)[0].role;
  }

  deleteRow(contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
    // for (let i = 0; i < this.contacts.length; ++i){
    //     if (this.contacts[i].id === id) {
    //         this.contacts.splice(i,1);
    //     }
    // }
  }

  addContact(form) {
    const id = this.contacts.length + 1;
    this.contacts.push({id, ...form});
  }

  onSubmit(form) {
    console.info(form);
    this.addContact(form.value);
  }

  showDetails(form) {
    // this.show.emit(contact);
  }

  editContact(form) {
    // this.edit.emit(contact);
  }

  deleteContact(form) {
    // this.remove.emit(contact);
  }
}
