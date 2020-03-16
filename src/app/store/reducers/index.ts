import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudents from './students.reducer';
import * as fromEmployees from './employees.reducer';

export interface ProjectState{
    students: fromStudents.StudentSate,
    employees: fromEmployees.EmployeeSate
}

export const reducers : ActionReducerMap<ProjectState> = {
    students: fromStudents.reducer,
    employees: fromEmployees.reducer
}

export const getProjectState = createFeatureSelector<ProjectState>('ngrx-app-store')

export const getStudentState = createSelector(getProjectState,(state:ProjectState)=>state.students);
export const getAllStudents = createSelector(getStudentState,fromStudents.getStudents);
export const getStudentsLoaded = createSelector(getStudentState,fromStudents.getStudentsLoaded);
export const getStudentsLoading = createSelector(getStudentState,fromStudents.getStudentsLoading);

export const getEmployeeState = createSelector(getProjectState,(state:ProjectState)=>state.employees);
export const getAllEmployees = createSelector(getEmployeeState,fromEmployees.getEmployees);
export const getEmployeesLoaded = createSelector(getEmployeeState,fromEmployees.getEmployeesLoaded);
export const getEmployeesLoading = createSelector(getEmployeeState,fromEmployees.getEmployeesLoading);