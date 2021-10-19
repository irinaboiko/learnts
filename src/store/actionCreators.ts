import * as UserActionCreators from "../pages/UsersPage/action-creators";
import * as TodosActionCreators from "../pages/todosPage/action-creators";

export default {
  ...UserActionCreators,
  ...TodosActionCreators,
};
