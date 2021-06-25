import React, { Component } from 'react'
import Social from '../components/Social';

class Home extends Component{
    render(){
        return(
            <div>
                <div className="condiv home">
                <img src="https://pbs.twimg.com/profile_images/1264254299141365760/OWwSzCH0_400x400.jpg" alt="profile" className="profilepic" />
            
                <Social />
            </div>

            </div>
        )
    }
}
export default Home
