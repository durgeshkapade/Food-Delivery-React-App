import {useState }from 'react';

// functional Component
const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(2);

    const {name , location} = props;
    return (
        <div className="User-card">
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Contact : durgeshkapade01@gmail.com</h3>
        </div>
    )
}


export default User;