import React, { Component } from 'react'
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect';
class Home extends Component{
    render(){
        return(
            <div>
                <div className="condiv home">
                <img src="https://pbs.twimg.com/profile_images/1264254299141365760/OWwSzCH0_400x400.jpg" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['Wellcom','I am Porruthai Rattanon']} speed={100} eraseDelay={2500} className="typingeffect"></ReactTypingEffect>
                <Social />
            </div>

            </div>
        )
    }
}
export default Home
