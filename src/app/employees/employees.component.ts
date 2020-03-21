import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../store' 
import { Employee } from '../models/employee.model';

import { Student } from '../models/student.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees$ : Observable<Employee[]>;
  searchstudents$: Observable<Student[]>;

  constructor(private store: Store<fromStore.ProjectState>) { }

  ngOnInit() {
    this.employees$ = this.store.select(fromStore.getAllEmployees);
    this.searchstudents$ = this.store.select(fromStore.getAllStudents);
  }

}
