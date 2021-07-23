import React, { Component } from 'react'
import profile1 from '../img/profile1.jpeg';
class About extends Component {
    render() {
        return (
             <div className="about">
                 <h1 className="subtopic">About Me</h1>
                 <img  src={[profile1]} speed={100} eraseDelay={2500} alt="profile" className="profilepicabout" />
                <h3>I'm Porruthai Rattanon</h3><br></br>
                <p> <b>ชื่อ </b>นางสาว พอฤทัย รัตนนท์<br></br>
                    <b>ชื่อเล่น </b>พอใจ<br></br>
                    <b>Mobile : </b> 0804484852 <br></br>
                    <b>E-mail : </b>impojai49@gmail.com, porruthair@gmail.com<br></br>
                    <b>Home Address : </b>77/5406 subsitict raikhing Sampran, Nakhonpathom 73210, Thailand <br></br>
                    <b>Line : </b>fon160142</p>
             </div>
        );
    }
   
}
export default About;