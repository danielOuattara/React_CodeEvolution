// import React, { Component } from 'react'

// export class Form extends Component {  // submitting many forms
//     constructor(props) {
//         super(props)
//         this.state = {
//              username: "",
//              comments: "",
//              city: "",
//         }
//     }

//     handleUsername = (event) => {
//         console.log(event);
//         this.setState({ username: event.target.value})
//     }
//     submitUsername = (event) => {
//         event.preventDefault();
//         alert("You're submitting : " + this.state.username);
//     }
//     // -----------

//     handleComments = (event) => {
//         this.setState({ comments: event.target.value})
//     }
//     submitComments = (event) => {
//         event.preventDefault();
//         alert("You're submitting : " + this.state.comments);
//     }
//     // -----------

//     handleCitySelect = (event) => {
//         this.setState({ city: event.target.value})
//     }
//     submitCitySelect = (event) => {
//         event.preventDefault();
//         alert("You're submitting : " + this.state.city);
//     }
//     // -----------
    
//     render() {
//         return (  // Many Forms
//             <div>
//                 <h1>Form component</h1>

//                 <form onSubmit={this.submitUsername}>
//                     <p>Output : {this.state.username}</p>
//                     <label htmlFor="">Username : </label>
//                     <input 
//                         type="text" 
//                         value={this.state.username} 
//                         placeholder="Enter your username"
//                         onChange ={this.handleUsername} 
//                     />
//                     <input type="submit" value="Submit" />
//                 </form>
//                 <hr />

//                 <form onSubmit={this.submitComments}>
//                     <p>Output : {this.state.comments}</p>
//                     <label htmlFor="comments">Comments : </label>
//                     <textarea name="comments" id="comments" 
//                               cols="30" rows="3"
//                               value={this.state.comments}
//                               onChange={this.handleComments} ></textarea>
//                     <input type="submit" />
//                 </form>
//                 <hr />

//                 <form onSubmit={this.submitCitySelect}>
//                     <p>Output : {this.state.city}</p>
//                     <label htmlFor="city">Select City : </label>
//                     <select 
//                         name="city" id="city" 
//                         onChange={this.handleCitySelect}>
//                         <option value="">Select</option>
//                         <option value="Ouagadougou">Ouagadougou</option>
//                         <option value="Cotonou">Cotonou</option>
//                         <option value="Accra">Accra</option>
//                     </select>
//                     <button type="submit">submit</button>
//                 </form>

//             </div>
//         ) 
//     }
// }

// export default Form;


import React, { Component } from 'react'

export class Form extends Component {  // submitting one global form
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comments: "",
            city: "",
        }
    }

    handleUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    handleComments = (event) => {
        this.setState({ comments: event.target.value })
    }

    handleCitySelect = (event) => {
        this.setState({ city: event.target.value })
    }

    submitForm = (event) => {
        event.preventDefault();
        alert("You're submitting : " + this.state.username + " " 
                                     + this.state.comments + " "
                                     + this.state.city);
    }


    render() {
        const { username, comments, city} = this.state;
        return (  // One global form
            <div>
                <h1>Form component</h1>  

                <form onSubmit={this.submitForm}>
                    <p>Output : {username}</p>
                    <label htmlFor="">Username : </label>
                    <input 
                        type="text"
                        value={username}
                        placeholder="Enter your username"
                        onChange={this.handleUsername} 
                    />


                    <p>Output : {this.state.comments}</p>
                    <label htmlFor="comments">Comments : </label>
                    <textarea 
                        name="comments" id="comments"
                        cols="30" rows="3"
                        value={comments}
                        placeholder=" Thank you for feed back"
                        onChange={this.handleComments} >
                    </textarea>

                    <p>Output : {city}</p>
                    <label htmlFor="city">Select City : </label>
                    <select 
                        name="city" id="city"
                        onChange={this.handleCitySelect}>
                        <option value="">Select a city</option>
                        <option value="Ouagadougou">Ouagadougou</option>
                        <option value="Cotonou">Cotonou</option>
                        <option value="Accra">Accra</option>
                    </select> <br />< br />

                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default Form
