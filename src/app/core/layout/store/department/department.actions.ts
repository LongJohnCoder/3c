import { Action } from '@ngrx/store';

export const RESET_DEPARTMENT_FORM = 'RESET_DEPARTMENT_FORM';

export const GET_DEPARTMENT_ATTEMPT = 'GET_DEPARTMENT_ATTEMPT';
export const GET_DEPARTMENT_SUCCESS = 'GET_DEPARTMENT_SUCCESS';

export const ADD_DEPARTMENT_ATTEMPT = 'ADD_DEPARTMENT_ATTEMPT';
export const ADD_DEPARTMENT_SUCCESS = 'ADD_DEPARTMENT_SUCCESS';

export const EDIT_DEPARTMENT_ATTEMPT = 'EDIT_DEPARTMENT_ATTEMPT';
export const EDIT_DEPARTMENT_SUCCESS = 'EDIT_DEPARTMENT_SUCCESS';

export const GET_DEPARTMENT_LIST_ATTEMPT = 'GET_DEPARTMENT_LIST_ATTEMPT';
export const GET_DEPARTMENT_LIST_SUCCESS = 'GET_DEPARTMENT_LIST_SUCCESS';

export const GET_TO_EDIT_DEPARTMENT_ATTEMPT = 'GET_TO_EDIT_DEPARTMENT_ATTEMPT';
export const GET_TO_EDIT_DEPARTMENT_SUCCESS = 'GET_TO_EDIT_DEPARTMENT_SUCCESS';

export class ResetDepartmentForm implements Action {
  readonly type = RESET_DEPARTMENT_FORM;
}

export class GetDepartmentAttempt implements Action {
  readonly type = GET_DEPARTMENT_ATTEMPT;
}

export class GetDepartmentSuccess implements Action {
  readonly type = GET_DEPARTMENT_SUCCESS;
  constructor(public payload: any) { }
}

export class AddDepartmentAttempt implements Action {
  readonly type = ADD_DEPARTMENT_ATTEMPT;
  constructor(public payload: any) { }
}

export class AddDepartmentSuccess implements Action {
  readonly type = ADD_DEPARTMENT_SUCCESS;
  constructor(public payload: any) { }
}

export class EditDepartmentAttempt implements Action {
  readonly type = EDIT_DEPARTMENT_ATTEMPT;
  constructor(public payload: any) { }
}

export class EditDepartmentSuccess implements Action {
  readonly type = EDIT_DEPARTMENT_SUCCESS;
  constructor(public payload: any) { }
}

export class GetDepartmentListAttempt implements Action {
  readonly type = GET_DEPARTMENT_LIST_ATTEMPT;
  constructor(public payload: any) { }
}

export class GetDepartmentListSuccess implements Action {
  readonly type = GET_DEPARTMENT_LIST_SUCCESS;
  constructor(public payload: any) { }
}

export class GetToEditDepartmentAttempt implements Action {
  readonly type = GET_TO_EDIT_DEPARTMENT_ATTEMPT;
  constructor(public payload: any) { }
}

export class GetToEditDepartmentSuccess implements Action {
  readonly type = GET_TO_EDIT_DEPARTMENT_SUCCESS;
  constructor(public payload: any) { }
}

export type DepartmentActions = ResetDepartmentForm |
  GetDepartmentAttempt | GetDepartmentSuccess |
  AddDepartmentAttempt | AddDepartmentSuccess |
  EditDepartmentAttempt | EditDepartmentSuccess |
  GetDepartmentListAttempt | GetDepartmentListSuccess |
  GetToEditDepartmentAttempt | GetToEditDepartmentSuccess;