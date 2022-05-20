import { Environment } from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomerDetails } from './employee';
import {EmployeeService} from './employee.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ANGULAR CRUD';

  
  constructor(private employee:EmployeeService){

    this.employee.getData().subscribe(data=>{
     console.warn(data)
    })
  }

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
