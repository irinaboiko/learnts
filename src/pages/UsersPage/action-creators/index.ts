import { Dispatch } from "redux";
import axios from "axios";

import { UserAction, UsersActionTypes } from "../types";

export const getUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UsersActionTypes.GET_USERS_REQUEST });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: UsersActionTypes.GET_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.GET_USERS_FAIL,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
