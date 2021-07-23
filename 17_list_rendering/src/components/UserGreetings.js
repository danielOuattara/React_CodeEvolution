
// New

// n°1

// import React, { Component } from 'react'

// export default class UserGreetings extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { isLoggedIn: true }
//     }   
//     render() {
//         // return (
//         //     <div>
//         //         <p>Welcome Daniel</p>
//         //         <p>Welcome Guest</p>
//         //     </div>
//         // )
//         if(this.state.isLoggedIn) {
//             return (
//                 <p>Weclome Daniel</p>
//             )
//         } else {
//             return (
//                 <p>Welcome guest</p>
//             )
//         }
//     }
// }

// --------------------------------------------------

//n°2
// import React, { Component } from 'react'

// export default class UserGreetings extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { isLoggedIn: true }
//     }
    
//     render() {
//         let message;
//         if(this.state.isLoggedIn) {
//             message = <p>Welcome Daniel</p>
//         } 
//         else {
//             message = <p>Welcome Guest</p>
//         }

//         return (
//             <div>
//                 {message}
//             </div>
//         )
//     }
// }

// --------------------------------------------------

//n°3
// import React, { Component } from 'react'

// export default class UserGreetings extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { isLoggedIn: true }
//     }
    
//     render() {
//         return (
//             this.state.isLoggedIn ? <p> Welcome Daniel</p> : <p>Welcome Guest</p>
//         )
//     }
// }

// --------------------------------------------------

// //n°4
// import React, { Component } from 'react'

// export default class UserGreetings extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { isLoggedIn: false }
//     }
    
//     render() {
//         return (
//             this.state.isLoggedIn? <p> Welcome Daniel</p> : null;
//         )
//     }
// }

// --------------------------------------------------

//n°5
import React, { Component } from 'react'

export default class UserGreetings extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoggedIn: true }
    }
    
    render() {
        return (
            this.state.isLoggedIn && <p> Welcome Daniel</p>
        )
    }
}
