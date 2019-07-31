import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact = {};
  isLoaded = false;
  contactId: number;

  constructor(
    private Contact: ContactsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.contactId = params.id
    )
    
    this.Contact.getById(this.contactId).subscribe(
      (data) => this.contact = data,
      (err) => console.debug(err),
      () => this.isLoaded = true
    )
  }
}
