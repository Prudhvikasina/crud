
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private EmployeeList: Employee[] = [{
        id: 1,
        ename: 'ABC',
        dob: new Date('10/31/1999'),
        mail: 'abc@gmail.com',
        gender: 'Male',
        mobile: '9999933333',
        edept: 'Sales'
    }];
    constructor(private http:HttpClient) {}

    getData()
    {
        let url="https://crudcrud.com/api/d156201959cf439a90a011f76304f1d4";
        return this.http.get(url);
    }
    getAllEmployees() {
        return this.EmployeeList
    }
    getEmployeesByID(id: number) {
        return this.EmployeeList.find(x => x.id == id)
    }
    addEmployee(user: Employee) {
        user.id = new Date().getTime();
        this.EmployeeList.push(user);
    }
    updateEmployee(user: Employee) {
        const userIndex = this.EmployeeList.findIndex(x => x.id == user.id);
        if (userIndex != null && userIndex != undefined) {
            this.EmployeeList[userIndex] = user;
        }
    }
    removeEmployee(id: number) {
        this.EmployeeList = this.EmployeeList.filter(x => x.id != id);
    }
}