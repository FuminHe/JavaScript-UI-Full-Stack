import React, { useContext } from "react";
import { UserContext } from "../context/components/userContext";

function UseContext() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>useContext</h1>
      <div>
        Name:
        <input
          type="text"
          value={user.userInfo.userName}
          onChange={(event) => {
            user.updateContext({
              userInfo: { ...user.userInfo, userName: event.target.value },
            });
          }}
        />
      </div>
    </>
  );
}

export default UseContext;
