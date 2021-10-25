
import React from  "react";

const withCounter = (WrappComponent) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
    }

    incrementCount = () => {
        // this.setState( {count : this.state.count + 1  }) // OK ! Why not use this one

        this.setState( prevState => {
            return { count: prevState.count + 1}
        })

    }
        render() {
            return  <WrappComponent 
                        name={"Daniel"} 
                        count={this.state.count} 
                        incrementCount={this.incrementCount}
                    />
        }
    }
    return WithCounter;
}

export default withCounter;

// NOTE: All components receive a different state form UpdatedComponent