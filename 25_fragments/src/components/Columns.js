//----------------------------------- OK
// import React from 'react';

// export default function Columns() {
//     return (
//         <React.Fragment>
//             <td>Name</td>
//             <td>Daniel</td>
//         </React.Fragment>
//     );
// }

//----------------------------------- OK
// import React from "react";

// export default function Columns() {
//   const items = [];
//   return (
//     <React.Fragment>
//       {items.map((item) => (
//         <React.Fragment key={item.id}>
//           <p>{item.title}</p>
//         </React.Fragment>
//       ))}
//       <td>Name</td>
//       <td>Daniel</td>
//     </React.Fragment>
//   );
// }
//
//----------------------------------- OK

// import React from "react";

// export default function Columns() {
//   const items = [];
//   return (
//     <>
//       {items.map((item) => (
//         <React.Fragment key={item.id}>
//           <p>{item.title}</p>
//         </React.Fragment>
//       ))}
//       <td>Name</td>
//       <td>Daniel</td>
//     </>
//   );
// }
//
//----------------------------------- OK

import React from "react";

export default function Columns() {
  const items = [];
  return (
    <>
      <td>Name</td>
      <td>Daniel</td>
    </>
  );
}
