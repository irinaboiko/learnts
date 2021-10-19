export interface userState {
  users: any[];
  isLoading: boolean;
  error: null | string;
}

export enum UsersActionTypes {
  GET_USERS_REQUEST = "GET_USERS_REQUEST",
  GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
  GET_USERS_FAIL = "GET_USERS_FAIL",
}

interface GetUsersRequestAction {
  type: UsersActionTypes.GET_USERS_REQUEST;
}

interface GetUsersSuccessAction {
  type: UsersActionTypes.GET_USERS_SUCCESS;
  payload: any[];
}

interface GetUsersFailAction {
  type: UsersActionTypes.GET_USERS_FAIL;
  payload: string;
}

export type UserAction =
  | GetUsersRequestAction
  | GetUsersSuccessAction
  | GetUsersFailAction;
