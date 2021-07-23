import React, { Component } from 'react'
// import Linkitems from './Linkitems';
class ListGpa extends Component {
    render() {
        return(
            <div className="ListGpa">
                <div >
                    <h1>{this.props.year}</h1>
                    <span className="subjecth"><b>Course</b></span><span className="spangaph"><b>Grade</b></span><br></br><div className="tab"></div><br></br>
                    <span className="subject"> {this.props.subject} </span><span className="spangap">{this.props.gpa} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject2} </span><span className="spangap">{this.props.gpa2} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject3} </span><span className="spangap">{this.props.gpa3} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject4} </span><span className="spangap">{this.props.gpa4} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject5} </span><span className="spangap">{this.props.gpa5} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject6} </span><span className="spangap">{this.props.gpa6} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject7} </span><span className="spangap">{this.props.gpa7} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject8} </span><span className="spangap">{this.props.gpa8} </span><br></br><div className="tab"></div>
                    <span className="subject">GPA &emsp;{this.props.GPA}  </span><br></br><div className="tab"></div><br></br>
                    {/* <Linkitems   item="GPA" tolink="/GPA" activenav={this.activeitem}></Linkitems> */}
                </div>
            </div>
            
            
        );
    }
}

export default ListGpa;