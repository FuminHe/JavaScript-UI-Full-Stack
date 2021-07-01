import React from "react";
import { useParams } from "react-router";

function Users() {
  const { firstname, lastname } = useParams();
  // return <div>Users : {match.params.name}</div>;
  return (
    <div>
      Users : {firstname} {lastname}
    </div>
  );
}

export default Users;
