import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../store' 
import { Student } from '../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students$: Observable<Student[]>;
  studentsLoading$: Observable<boolean>;
  studentsLoaded$: Observable<boolean>;

  constructor(private store: Store<fromStore.ProjectState>){

  }

  ngOnInit() {
    this.students$ = this.store.select(fromStore.getAllStudents);
    this.studentsLoading$ = this.store.select(fromStore.getStudentsLoading);
    this.studentsLoaded$ = this.store.select(fromStore.getStudentsLoaded);

    this.store.dispatch(new fromStore.LoadStudents());
   
  }

}
