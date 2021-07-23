import React, { Component } from 'react'
// import Linkitems from './Linkitems';
class Widecard extends Component {
    render() {
        return(
            <div className="widecard">
                <div className="wide-con">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.where}</h4>
                    <h4 className="secondtext">{this.props.from}  {this.props.to}</h4>
                    {/* <Linkitems   item="GPA" tolink="/GPA" activenav={this.activeitem}></Linkitems> */}
                </div>
            </div>
            
            
        );
    }
}

export default Widecard;