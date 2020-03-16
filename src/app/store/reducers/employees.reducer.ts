import  * as fromEmployees from '../actions/employees.actions';
import { Employee } from '../../models/employee.model';

export interface EmployeeSate{
    data: Employee[];
    loaded: boolean;
    loading: boolean;
}

export const initialState : EmployeeSate = {
    data : [
        { id: 1, name: 'employee 1'},
        { id: 2, name: 'employee 2'},
        { id: 3, name: 'employee 3'},
        { id: 4, name: 'employee 4'}
    ],
    loaded: false,
    loading: false
}

export function reducer(
    state = initialState, 
    action: fromEmployees.EmployeesAction
    ) : EmployeeSate{

    switch (action.type){
        case fromEmployees.LOAD_EMPLOYEES: {
            return {
                ...state,                    
                loading: true
            }
        }

        case fromEmployees.LOAD_EMPLOYEES_SUCCESS: {
            return {
                ...state,                    
                loading: false,
                loaded: true
            }
        }

        case fromEmployees.LOAD_EMPLOYEES_FAIL: {
            return {
                ...state,                    
                loading: false,
                loaded: false
            }
        }           
    }

    return state;
}

export const getEmployees = (state: EmployeeSate) => state.data;
export const getEmployeesLoading = (state: EmployeeSate) => state.loading;
export const getEmployeesLoaded = (state: EmployeeSate) => state.loaded;