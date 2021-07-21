import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Employee } from '../employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable <Employee[]>{
    return this.http.get<Employee[]>('http://192.168.0.4:8080/employee');
  }

  save(employee: Employee): Observable <Employee>{
    return this.http.post<Employee>('http://192.168.0.4:8080/employee',employee);
  }


}
