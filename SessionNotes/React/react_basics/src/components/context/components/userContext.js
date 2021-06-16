import React from "react";

// create userContext
const UserContext = React.createContext({ name: "Jhon" });

// provider and consumer
const UserProvider = UserContext.Provider;
const UserComsumer = UserContext.Consumer;

export { UserProvider, UserComsumer };
