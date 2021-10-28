
import React, { Component } from 'react'
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
             posts: [],
             errorMessage: false,
             loading: true
        }
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then( res => {
            // this.setState({  // AVOID because of Asynchronous
            //     posts: res.data
            // })

            this.setState( () => ({ // PREFER this way
                posts: res.data,
                loading: false
            }));


            console.log("posts = ", this.state.posts) 

        })
        .catch(err =>  {
            console.log(err.message)
            this.setState(()=>({
                errorMessage: err.message,
                loading: false
            }))
        })
    }

    render() {
        const { posts, errorMessage } = this.state
        return (
            <div>
                <h1>List of the posts</h1>
                { this.state.loading ? 
                    "...loading" 
                    : 
                    !errorMessage ? 
                        posts.map( (post) => {
                            return <p key={post.id}> {post.title}</p>
                        })
                        :
                        errorMessage
                }
            </div>
        )
    }
}

export default PostList
