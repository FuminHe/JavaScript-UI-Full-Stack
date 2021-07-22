import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/userStore/userAction";

function Main(props) {
  useEffect(() => {
    props.fetchUser();
  }, []);

  const { currentUser } = props;

  if (currentUser == undefined) {
    return <View></View>;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>{currentUser.name} is Logged in</Text>
    </View>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
