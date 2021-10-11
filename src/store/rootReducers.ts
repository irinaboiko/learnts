import { combineReducers } from "redux";

import usersPage from "../pages/UsersPage/reducers";

const rootReducers = combineReducers({
  usersPage,
});

export default rootReducers;
