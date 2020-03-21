import { Action } from '@ngrx/store'

import { Student } from '../../models/student.model';

// load students
export const LOAD_STUDENTS = '[Project] Load Students';
export const LOAD_STUDENTS_FAIL = '[Project] Load Students Fail';
export const LOAD_STUDENTS_SUCCESS = '[Project] Load Students Success';

//search students
export const SEARCH_STUDENTS = '[Project] Search Students';
export const SEARCH_STUDENTS_FAIL = '[Project] Search Students Fail';
export const SEARCH_STUDENTS_SUCCESS = '[Project] Search Students Success';


export class LoadStudents implements Action {
    readonly type = LOAD_STUDENTS;
}
export class LoadStudentsFail implements Action {
    readonly type = LOAD_STUDENTS_FAIL;
    constructor(public payload : any){}
}
export class LoadStudentsSuccess implements Action {
    readonly type = LOAD_STUDENTS_SUCCESS;
    constructor(public payload : Student[]){}
}


export class SearchStudents implements Action {
    readonly type = SEARCH_STUDENTS;
    constructor(public payload : any){}
}
export class SearchStudentsFail implements Action {
    readonly type = SEARCH_STUDENTS_FAIL;
    constructor(public payload : any){}
}
export class SearchStudentsSuccess implements Action {
    readonly type = SEARCH_STUDENTS_SUCCESS;
    constructor(public payload : Student[]){}
}

//Similarly there will be DELETE_STUDENT, DELETE_STUDENT_SUCCESS, DELETE_STUDENT_FAIL

//action types
export type StudentsAction = LoadStudents | LoadStudentsFail | LoadStudentsSuccess |
                             SearchStudents | SearchStudentsFail | SearchStudentsSuccess;

