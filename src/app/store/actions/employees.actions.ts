import { Action } from '@ngrx/store'

import { Employee } from '../../models/employee.model';

// load pizzas
export const LOAD_EMPLOYEES = '[Project] Load Employees';
export const LOAD_EMPLOYEES_FAIL = '[Project] Load Employees Fail';
export const LOAD_EMPLOYEES_SUCCESS = '[Project] Load Employees Success';


export class LoadEmployees implements Action {
    readonly type = LOAD_EMPLOYEES;
}

export class LoadEmployeesFail implements Action {
    readonly type = LOAD_EMPLOYEES_FAIL;
    constructor(public payload : any){}
}

export class LoadEmployeesSuccess implements Action {
    readonly type = LOAD_EMPLOYEES_SUCCESS;
    constructor(public payload : Employee[]){}
}

//action types
export type EmployeesAction = LoadEmployees | LoadEmployeesFail | LoadEmployeesSuccess ;

