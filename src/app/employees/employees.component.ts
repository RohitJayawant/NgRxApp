import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../store' 
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees$ : Observable<Employee[]>;

  constructor(private store: Store<fromStore.ProjectState>) { }

  ngOnInit() {
    this.employees$ = this.store.select(fromStore.getAllEmployees);
  }

}
