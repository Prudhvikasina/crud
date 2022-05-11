import { Component } from '@angular/core';
import { CustomerDetails } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ANGULAR CRUD';
  details: CustomerDetails = new CustomerDetails;
  ngOnInit()
  {
    this.details.code="Cust001";
    this.details.name="prudhvi";
  }
  changeDetails()
  {
    this.details.code="cust002";
  }
}
