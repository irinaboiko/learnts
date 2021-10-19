import { Dispatch } from "redux";
import axios from "axios";

import { TodosAction, TodosActionTypes } from "../types";

export const getTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodosActionTypes.GET_TODOS_REQUEST });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _page: page,
            _limit: limit,
          },
        }
      );
      dispatch({
        type: TodosActionTypes.GET_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: TodosActionTypes.GET_TODOS_FAIL,
        payload: "Произошла ошибка при загрузке тудушек",
      });
    }
  };
};

export const setTodosPage = (page: number): TodosAction => {
  return {
    type: TodosActionTypes.SET_TODOS_PAGE,
    payload: page,
  };
};
