import React, { Component } from 'react';

export class HoverCounterTwo extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            count: 0  
        }
    }

    incrementCount= () => {
        this.setState( prevState => {
            return { count: prevState.count + 1}
        })
    }
    
    render() {
        const { count } = this.state;
        return (
            <div>
                <h3 onMouseOver={this.incrementCount}> 
                    Hovered {count} times
                </h3>
            </div>
        )
    }
}

export default HoverCounterTwo;


/* We can use HOC to share code between components, to avoid code 
   repetition. 

   But is there another way to achieve this in the case of 
   components ?
*/