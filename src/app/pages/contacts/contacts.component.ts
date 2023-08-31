import { Component } from '@angular/core';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { CompanyContantComponent } from './components/company-contant/company-contant.component';
import { LocationComponent } from './components/location/location.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less'],
  standalone: true,
  imports: [ContactsFormComponent, CompanyContantComponent, LocationComponent],
})
export class ContactsComponent {}
