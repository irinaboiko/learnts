import React from "react";
import UsersPageContainer from "./pages/UsersPage/containers/UsersPageContainer";
import TodosPageContainer from "./pages/todosPage/containers/TodosPageContainer";

const App = () => {
  return (
    <div>
      <UsersPageContainer />
      <hr />
      <TodosPageContainer />
    </div>
  );
};

export default App;
