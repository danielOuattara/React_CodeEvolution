
import React from "react";

const UserContext = React.createContext("Ouattara");
const UserProvider = UserContext.Provider;
const UserComsumer = UserContext.Consumer;

// export { UserProvider, UserComsumer };
export default UserContext;