import { combineReducers } from "redux";

import usersPage from "../pages/UsersPage/reducers";
import { todosPage } from "../pages/todosPage/reducers";

const rootReducer = combineReducers({
  usersPage,
  todosPage,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
