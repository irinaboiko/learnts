import React from "react";
import { useSelector } from "react-redux";
import UsersPageLayout from "../components/UsersPageLayout";

const UsersPageContainer: React.FC = () => {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      <UsersPageLayout />
    </div>
  );
};

export default UsersPageContainer;
