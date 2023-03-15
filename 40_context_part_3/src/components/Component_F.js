import React from "react";
import { UserConsumer } from "./userContext";

export default function Component_F() {
  return (
    <div>
      <UserConsumer>
        {(username) => <div>From Component_F: {username}</div>}
      </UserConsumer>
    </div>
  );
}
