import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
// import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: 'all', component: EmployeeListComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'update-employee/:id', component: CreateEmployeeComponent },
  // { path: 'edit/:id', component:EditEmployeeComponent},
];

@NgModule({
  imports: [
  
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
