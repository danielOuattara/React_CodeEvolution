import React from "react";

const UserContext = React.createContext();

const PersonProvider = UserContext.Provider;
const PersonConsumer = UserContext.Consumer;

export { PersonProvider, PersonConsumer };
