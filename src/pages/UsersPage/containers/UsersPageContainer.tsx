import React, { useEffect } from "react";

import { useActions, useTypedSelector } from "../../../hooks";
import { getUsers } from "../action-creators";

const UsersPageContainer: React.FC = () => {
  const { users, isLoading, error } = useTypedSelector(
    (state) => state.usersPage
  );
  const { getUsers } = useActions();

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

export default UsersPageContainer;
