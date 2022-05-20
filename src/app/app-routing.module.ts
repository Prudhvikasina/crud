import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { GraphsComponent } from './graphs/graphs.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: 'all', component: EmployeeListComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'update-employee/:id', component: CreateEmployeeComponent },
  {path:'',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'login' ,component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'user' , component:UserComponent},
  {path: 'users' , component:UsersComponent},
  {path: 'youtube' ,component:YoutubeComponent},
  {path: 'images', component:ImagesComponent},
  {path: 'graphs', component:GraphsComponent},

];

@NgModule({
  imports: [
  
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
