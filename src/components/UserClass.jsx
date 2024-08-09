import React from 'react';

// Class Based Component
class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count :1,
            count2 :2,
        }
    }

    render(){
        const {name , location} = this.props;
        
        return (
            <div className="User-card">
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1,
                    })
                }}>Click count</button>
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h3>Contact : durgeshkapade01@gmail.com</h3>
            </div>
        )
    }
}


export default UserClass;