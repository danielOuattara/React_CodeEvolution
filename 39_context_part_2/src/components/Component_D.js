import React from "react";
import { UserConsumer } from "./userContext";
import { PersonConsumer } from "./personContext";
//
export default function ComponentC() {
  return (
    <div>
      Component D
      <UserConsumer>
        {(value) => (
          <PersonConsumer>
            {(context) => {
              const { name, age } = context;

              return (
                <>
                  <div>Hello - {value}</div>
                  <h2>
                    {name} -- {age}
                  </h2>
                </>
              );
            }}
          </PersonConsumer>
        )}
      </UserConsumer>
    </div>
  );
}
