import { Student } from '../models/student.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StudentService{
    constructor(private http: HttpClient){}

    getStudents() : Observable<Student[]>{
        return this.http
            .get<Student[]>('http://my-json-server.typicode.com/RohitJayawant/fakeDB/students')
            .pipe(catchError((error : any) => Observable.throw(error.json)))
            
    }

    searchStudents(searchString : string) : Observable<Student[]>{
        return this.http
            .get<Student[]>('http://my-json-server.typicode.com/RohitJayawant/fakeDB/students')
            .pipe(
                map(results => results.filter( s=> s.name.includes(searchString) == true )),                
                catchError((error : any) => Observable.throw(error.json))
            )
            
    }

}