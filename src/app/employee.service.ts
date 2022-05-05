
import { Injectable } from '@angular/core';
import { Employee } from './employee';

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
    constructor() {}
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