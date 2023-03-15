import React from "react";
import { UserConsumer } from "./userContext";

export default function ComponentF() {
  return (
    <div>
      Component F
      <UserConsumer>{(username) => <div>Hello {username}</div>}</UserConsumer>
      <UserConsumer>{(context) => <div>Hello {context}</div>}</UserConsumer>
      <UserConsumer>{(anything) => <div>Hello {anything}</div>}</UserConsumer>
    </div>
  );
}
