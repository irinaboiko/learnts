import { TodosAction, TodosActionTypes, todosState } from "../types";

const defaultState: todosState = {
  todos: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 10,
};

export const todosPage = (
  state = defaultState,
  action: TodosAction
): todosState => {
  switch (action.type) {
    case TodosActionTypes.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TodosActionTypes.GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case TodosActionTypes.GET_TODOS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TodosActionTypes.SET_TODOS_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
