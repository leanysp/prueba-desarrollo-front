import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = new Array<Employee>();

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService ) { }

  ngOnInit() {
    console.log("entrando datos metodo");
    this.employeeService.getAll().subscribe(
      (response: any) => {
        this.employees = response;
        console.log('this.employees:: ' + JSON.stringify(this.employees));
      }
    );
  }

  save(){
    this.employeeService.save(this.employee).subscribe(
      (response: any)=>{
        this.employee = response;
      }
    );
    console.log('this.employee:: '+ JSON.stringify(this.employee.boss));
  }

}
