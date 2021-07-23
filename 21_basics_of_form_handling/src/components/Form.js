import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             comments: "",
             city: "",
        }
    }

    handleUsername = (event) => {
        this.setState({ username: event.target.value})
    }

    handleComments = (event) => {
        this.setState({ comments: event.target.value})
    }

    handleCitySelect = (event) => {
        this.setState({ city: event.target.value})
    }

    submitUsername = (event) => {
        event.preventDefault();
        alert("You're submitting : " + this.state.username);
    }
    submitComments = (event) => {
        event.preventDefault();
        alert("You're submitting : " + this.state.comments);
    }
    submitCitySelect = (event) => {
        event.preventDefault();
        alert("You're submitting : " + this.state.city);
    }
    
    render() {
        return (
            <div>
                <h1>Form component</h1>

                <form onSubmit={this.submitUsername}>
                    <p>Output : {this.state.username}</p>
                    <label htmlFor="">Username : </label>
                    <input type="text" 
                           value={this.state.username} 
                           onChange={this.handleUsername} />
                    <input type="submit" />
                </form>
                <hr />

                <form onSubmit={this.submitComments}>
                    <p>Output : {this.state.comments}</p>
                    <label htmlFor="comments">Comments : </label>
                    <textarea name="comments" id="comments" 
                              cols="30" rows="3"
                              value={this.state.comments}
                              onChange={this.handleComments} ></textarea>
                    <input type="submit" />
                </form>
                <hr />

                <form onSubmit={this.submitCitySelect}>
                    <p>Output : {this.state.city}</p>
                    <label htmlFor="city">Select City : </label>
                    <select name="city" id="city" 
                            onChange={this.handleCitySelect}>
                        <option value="">Select</option>
                        <option value="Ouagadougou">Ouagadougou</option>
                        <option value="Cotonou">Cotonou</option>
                        <option value="Accra">Accra</option>
                    </select>
                    <button type="submit">submit</button>
                </form>

            </div>
        ) 
    }
}

export default Form


// import React, { Component } from 'react'

// export class Form extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             username: "",
//             comments: "",
//             city: "",
//         }
//     }

//     handleUsername = (event) => {
//         this.setState({ username: event.target.value })
//     }

//     handleComments = (event) => {
//         this.setState({ comments: event.target.value })
//     }

//     handleCitySelect = (event) => {
//         this.setState({ city: event.target.value })
//     }

//     submitForm = (event) => {
//         event.preventDefault();
//         alert("You're submitting : " + this.state.username + " " 
//                                      + this.state.comments + " "
//                                      + this.state.city);
//     }


//     render() {
//         return (
//             <div>
//                 <h1>Form component</h1>

//                 <form onSubmit={this.submitForm}>
//                     <p>Output : {this.state.username}</p>
//                     <label htmlFor="">Username : </label>
//                     <input type="text"
//                         value={this.state.username}
//                         onChange={this.handleUsername} />
//                     <input type="submit" />

//                     <p>Output : {this.state.comments}</p>
//                     <label htmlFor="comments">Comments : </label>
//                     <textarea name="comments" id="comments"
//                         cols="30" rows="3"
//                         value={this.state.comments}
//                         onChange={this.handleComments} ></textarea>

//                     <p>Output : {this.state.city}</p>
//                     <label htmlFor="city">Select City : </label>
//                     <select name="city" id="city"
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

// export default Form
