import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent implements OnInit {
 
  id: number = 0;
  userValue: FormGroup;

  constructor(
    private employeeService:EmployeeService, 
    private  formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    ) { 
    this.userValue=this.formBuilder.group({
      ename:['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$')]],
      edept:['', Validators.required],
      id:[0,[Validators.required]],
      gender: ['', [Validators.required]],
      // dob:[null,[Validators.required]],
      mobile: ['',  Validators.compose([Validators.required, Validators.pattern("[[6-9]\\d{9}")])],
      mail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],

    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (params['id'] != null) {
        this.userValue.get('Id')?.setValue(params['id']);
        const data = this.employeeService.getEmployeesByID(this.id);
        if (data) {
          this.userValue.setValue(data);
        }
      }
    });
  }

  save(){
    if(this.userValue.invalid){
        return;
      }

      if(this.userValue.valid){
        if (this.userValue.invalid) // true if any form validation fail
        return
  
        if (this.userValue.get('id')?.value === 0) {
          // on Create New User
          this.employeeService.addEmployee(this.userValue.value);
        } else {
          // on Update User info
          this.employeeService.updateEmployee(this.userValue.value);
        }
    
        //Redirecting to user List page after save or update
        this.router.navigate(['/all']);

     
        }
      }

}
