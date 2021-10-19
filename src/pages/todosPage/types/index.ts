export interface todosState {
  todos: any[];
  isLoading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodosActionTypes {
  GET_TODOS_REQUEST = "GET_TODOS_REQUEST",
  GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS",
  GET_TODOS_FAIL = "GET_TODOS_FAIL",
  SET_TODOS_PAGE = "SET_TODOS_PAGE",
}

interface GetTodosRequestAction {
  type: TodosActionTypes.GET_TODOS_REQUEST;
}

interface GetTodosSuccessAction {
  type: TodosActionTypes.GET_TODOS_SUCCESS;
  payload: any[];
}

interface GetTodosFailAction {
  type: TodosActionTypes.GET_TODOS_FAIL;
  payload: string;
}

interface SetTodosPageAction {
  type: TodosActionTypes.SET_TODOS_PAGE;
  payload: number;
}

export type TodosAction =
  | GetTodosRequestAction
  | GetTodosSuccessAction
  | GetTodosFailAction
  | SetTodosPageAction;
