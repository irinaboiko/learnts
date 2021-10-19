import React, { useEffect } from "react";
import { useActions, useTypedSelector } from "../../../hooks";
import { setTodosPage } from "../action-creators";

const TodosPageContainer: React.FC = () => {
  const { todos, isLoading, error, page, limit } = useTypedSelector(
    (state) => state.todosPage
  );
  const { getTodos, setTodosPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    getTodos(page, limit);
  }, [page]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id}. {todo.title}
          </div>
        );
      })}
      {pages.map((p) => {
        return (
          <button
            key={p}
            onClick={() => setTodosPage(p)}
            style={{ color: p === page ? "green" : "black" }}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
};

export default TodosPageContainer;
