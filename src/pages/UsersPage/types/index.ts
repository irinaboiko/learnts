export interface userState {
  users: any[];
  isLoading: boolean;
  error: null | string;
}

export enum UsersActionTypes {
  FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAIL = "FETCH_USERS_FAIL",
}

interface FetchUsersRequestAction {
  type: UsersActionTypes.FETCH_USERS_REQUEST;
}

interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersFailAction {
  type: UsersActionTypes.FETCH_USERS_FAIL;
  payload: string;
}

export type UserAction =
  | FetchUsersRequestAction
  | FetchUsersFailAction
  | FetchUsersSuccessAction;
