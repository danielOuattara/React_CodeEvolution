
import React from "react";

const UserContext = React.createContext("React developper");  // default param);
const UserProvider = UserContext.Provider;
const UserComsumer = UserContext.Consumer;

export { UserProvider, UserComsumer};
export default UserContext;