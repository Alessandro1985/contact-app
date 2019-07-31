import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from '../app/components/contacts-list/contacts-list.component';
import { ContactDetailsComponent } from '../app/components/contact-details/contact-details.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
