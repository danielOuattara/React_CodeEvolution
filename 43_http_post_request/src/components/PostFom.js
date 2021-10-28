import React, { Component } from 'react'
import axios from 'axios';
class PostFom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title:'',
            body: '',
        }
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then( res => console.log(res))
        .cathc(err =>console.log(err))
    }
    
    render() {

        const { userId, title, body} = this.state;
        return (
            <div>
                <form action="" onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor="name"> UserId : </label>
                        <input 
                            type="text" 
                            name="userId" 
                            value={userId}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="name"> Title : </label>
                        <input 
                            type="text" 
                            name="title" 
                            value={title}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="name"> Content : </label>
                        <input 
                            type="text" 
                            name="body" 
                            value={body}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit"> Submit</button>
                </form>
            </div>
        )
    }
}

export default PostFom
