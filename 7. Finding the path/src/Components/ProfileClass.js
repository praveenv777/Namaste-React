import {Component} from "react";

class Profile extends Component{ // React.Component OR Component
    constructor(props){
        super(props)
        // CREATE A STATE...
            this.state={
                count: 0
            } 
    }

    render(){
        const {count} = this.state
        return(
            <div>
            <h1>Profile Class based Component</h1>
            <h2>Name: {this.props.name}</h2>
            <h3>Count:{count}</h3>
            <button onClick={()=>{
                // WE DONT MUTATE THE STATE DIRECTLY..
                this.setState({
                    count:1,
                })
            }}>Set Count</button>
        </div>
        )
        
    }
}

export default Profile;