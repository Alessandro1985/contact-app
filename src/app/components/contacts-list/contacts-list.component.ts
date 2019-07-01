import { Component, OnInit } from '@angular/core';
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

  constructor(
    private Contact: ContactsService,
    private Info: InfoService
  ) { }

  ngOnInit() {
    this.Contact.getContacts().subscribe(
      (data) => this.contacts = data,
      (err) => console.debug(err),
      () => this.isContactLoaded = true
    )

    this.Info.getInfo().subscribe(
      (data) => this.info = data,
      (err) => console.debug(err),
      () => this.isInfoLoaded = true
    )
  }

  getRoleName(roleId: number){
    return this.info.filter((item) => item.id === roleId)[0].role;
  }
}
