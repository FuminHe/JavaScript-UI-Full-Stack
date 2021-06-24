import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../reduxStore/asyncUserStore/userActions";

function UserComponent({ userData, fetchUserData }) {
  // const { userData, fetchUserData } = props;

  // use useEffect as componentDidMount to get userData
  useEffect(() => {
    fetchUserData();
  }, []);

  return userData.loading ? (
    <h2> Loading </h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <>
      <h2>Users List</h2>
      <div>
        {userData.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { userData: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchUserData: () => dispatch(fetchUsers()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
