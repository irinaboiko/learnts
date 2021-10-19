//import { handleAction } from "redux-action-creators";
import { userState, UserAction, UsersActionTypes } from "../types";

const defaultState: userState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersPage = (state = defaultState, action: UserAction) => {
  switch (action.type) {
    case UsersActionTypes.GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UsersActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case UsersActionTypes.GET_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

/*type State = typeof defaultState;

const usersPage = handleAction<State>(
  {
    [UsersActionTypes.FETCH_USERS_REQUEST]: (state: userState) => ({
      ...state,
      isLoading: true,
    }),
    [UsersActionTypes.FETCH_USERS_SUCCESS]: (
      state: userState,
      action: UserAction
    ) => ({
      ...state,
      isLoading: false,
      users: action.payload,
    }),
    [UsersActionTypes.FETCH_USERS_FAIL]: (
      state: userState,
      action: UserAction
    ) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
  defaultState
);*/

export default usersPage;
