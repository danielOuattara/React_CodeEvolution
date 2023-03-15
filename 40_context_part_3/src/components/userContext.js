import React from "react";

// default value for the context upon creation
const UserContext = React.createContext("Ouattara");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserContext };
