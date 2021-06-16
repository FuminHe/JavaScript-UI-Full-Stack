import React from "react";
import { UserComsumer } from "./userContext";

function User() {
  return (
    <div>
      <UserComsumer>
        {({ userInfo, updateContext }) => (
          <>
            Name:
            <input
              type="text"
              value={userInfo.userName}
              onChange={(event) => {
                updateContext({
                  userInfo: { ...userInfo, userName: event.target.value },
                });
              }}
            />
            Gender:
            <input
              type="text"
              value={userInfo.gender}
              onChange={(event) => {
                updateContext({
                  userInfo: { ...userInfo, gender: event.target.value },
                });
              }}
            />
            Age:
            <input
              type="text"
              value={userInfo.age}
              onChange={(event) => {
                updateContext({
                  userInfo: { ...userInfo, age: event.target.value },
                });
              }}
            />
          </>
        )}
      </UserComsumer>
    </div>
  );
}

export default User;
