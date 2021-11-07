
import React from "react";

const UserContext = React.createContext();

const PersonProvider = UserContext.Provider;
const PersonComsumer = UserContext.Consumer;

export { PersonProvider, PersonComsumer };