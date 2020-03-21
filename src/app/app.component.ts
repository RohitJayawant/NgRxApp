import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../app/store' ;
import { Student } from '../app/models/student.model';
import { fromEvent, iif, pipe } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, find } from 'rxjs/operators';


import * as fromStudentService from './services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  searchstudents$: Observable<Student[]>;
  searchstudentsLoading$: Observable<boolean>;
  searchstudentsLoaded$: Observable<boolean>;

  searchResults : Student[];
 
  constructor(private store: Store<fromStore.ProjectState>, private studentservice : fromStudentService.StudentService){
  }

  ngOnInit(){  
    this.searchResults = [];
    this.searchstudents$ = this.store.select(fromStore.getAllStudents);
    this.searchstudentsLoading$ = this.store.select(fromStore.getStudentsLoading);
    this.searchstudentsLoaded$ = this.store.select(fromStore.getStudentsLoaded);     
  }

  ngAfterViewInit() {
    const searchBox = document.getElementById('txtSearch');
    const typeahead$ = fromEvent(searchBox, 'keyup').pipe(
      map((e: any) => e.target.value),      
      debounceTime(100),
      distinctUntilChanged(),
      //switchMap(text => this.studentservice.searchStudents(text))
      switchMap(text => this.searchStudents(text))
    ).subscribe();    
  }


  searchStudents(searchstring : string) : Observable<Student[]>{
    this.store.dispatch(new fromStore.SearchStudents(searchstring));
    return this.searchstudents$;
  } 
}

