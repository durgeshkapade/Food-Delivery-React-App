import User from './User';
import UserClass from './UserClass';

const About = ()=>{
    return (
        <div className='pt-[100px]'>
            <h1>Hello , This is About Page</h1>
            {/* <User name={"Durgesh Kapade"} location={"Shirpur Function"}/> */}
            <UserClass  name={"Durgesh Kapade"} location={"Shirpur Class"} />
        </div>
    )
}

export default About;