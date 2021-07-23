import React, { Component } from 'react'
import Social from '../components/Social';
import profile1 from '../img/profile1.jpeg';
import ReactTypingEffect from 'react-typing-effect';
class Home extends Component{
    render(){
        return(
            <div>
                <div className="condiv home">
                <img src={[profile1]} speed={100} eraseDelay={2500} alt="profile" className="profilepic" />
                <ReactTypingEffect text={['Wellcom','I am Porruthai Rattanon']} speed={100} eraseDelay={2500} className="typingeffect"></ReactTypingEffect>
                <Social />
            </div>

            </div>
        )
    }
}
export default Home
