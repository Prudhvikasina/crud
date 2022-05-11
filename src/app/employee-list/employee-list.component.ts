import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})


export class EmployeeListComponent implements OnInit {
  EmployeeList: Employee[] = [];
  first = 0;
  rows = 10;
  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
      // Get Users from UserService
      this.EmployeeList = this.employeeService.getAllEmployees();
  }
  //****************PrimeNG DataTable Pagination method Start*********************** */
  //***************Reference: https://primefaces.org/primeng/showcase/#/table/page********** */
  next() {
      this.first = this.first + this.rows;
  }
  prev() {
      this.first = this.first - this.rows;
  }
  reset() {
      this.first = 0;
  }
  isLastPage(): boolean {
      return this.EmployeeList ? this.first === (this.EmployeeList.length - this.rows) : true;
  }
  isFirstPage(): boolean {
      return this.EmployeeList ? this.first === 0 : true;
  }
  //****************PrimeNG DataTable Pagination Method End*********************** */
  // ********************User To Remove User from User List*************************/
  remove(id: number) {
      this.employeeService.removeEmployee(id);
      this.EmployeeList = this.employeeService.getAllEmployees();
  }
}


