import { Action } from '@ngrx/store'

import { Student } from '../../models/student.model';

// load pizzas
export const LOAD_STUDENTS = '[Project] Load Students';
export const LOAD_STUDENTS_FAIL = '[Project] Load Students Fail';
export const LOAD_STUDENTS_SUCCESS = '[Project] Load Students Success';


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

//Similarly there will be DELETE_STUDENT, DELETE_STUDENT_SUCCESS, DELETE_STUDENT_FAIL

//action types
export type StudentsAction = LoadStudents | LoadStudentsFail | LoadStudentsSuccess ;

