import React from "react";
import { UserConsumer } from "./userContext";
import { PersonConsumer } from "./personContext";
//
export default function ComponentC() {
  return (
    <div>
      Component D
      <UserConsumer>
        {(value) =>  (
        <PersonConsumer>
          {(context) => {
            // const {childFirstName , person: {name, age} } = context;
            console.log(context);
            const { name, age } = context;
            <div>Hello - {value}</div>}
            <div>
              {
                <h2>
                  {name} -- {age}
                </h2>
              }
              {/* <h2>{childFirstName}</h2> */}
            </div>;
          }}
        </PersonConsumer>
            
        )}

      </UserConsumer>
      {/* <PersonConsumer>{(value) => <h1>{value}</h1>}</PersonConsumer> */}
    </div>
  );
}
