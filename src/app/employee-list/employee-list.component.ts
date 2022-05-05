import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
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

// export class EmployeeListComponent implements OnInit {
//   employees = new Array<Employee>();

//   constructor(private empservice: EmployeeService, private formBuilder: FormBuilder, private router: Router) {
//     empservice.getAllEmployes().subscribe((response: Employee[]) => {
//       this.employees = response.map(item => {
//         return new Employee(
//           item.id,
//           item.ename,
//           item.edept,
//           item.mobile,
//           item.mail
//         );
//       });
//     });
//   }

//   ngOnInit(): void {
//     this.getAllEmployes;
//   }
//   getAllEmployes(): void {
//     this.empservice.getAllEmployes().subscribe(data => {
//       this.employees = data;
//       console.log("usercreated", data);
//     })
//   }
//   deleteEmployee(id: number) {
//     this.empservice.deleteUser(id).subscribe(
//       data => {
//         console.log(data);
//         this.getAllEmployes();
//       }
//     )
//   }
//   showEdit(id: number) {
//     this.router.navigate(['edit/' + id]);
//   }


// }
