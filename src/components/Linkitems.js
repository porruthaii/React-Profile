import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Linkitems extends Component{
    render() {
        return (
            <a className= "btn" id={this.props.item}>
               <Link  to={this.props.tolink} >{this.props.item}</Link>
            </a>
            
        )
    }
}

export default Linkitems