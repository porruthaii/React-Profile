import React, { Component } from 'react'
// import Linkitems from './Linkitems';
class ListGpaCom extends Component {
    render() {
        return(
            <div className="ListGpaCom">
                <div >
                    {/* <h1>{this.props.year}</h1> */}
                    <br></br><br></br><br></br>
                    <span className="subjecth"><b>Course</b></span><span className="yearh"><b>Year</b></span><span className="spangaph"><b>Grade</b></span><br></br><div className="tab"></div>
                   <br></br><div className="tab"></div> <span className="subject"> {this.props.subject} </span><span className="yearh"> {this.props.year}</span><span className="spangap">{this.props.gpa} </span>
                    <br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject2} </span><span className="yearh"> {this.props.year2}</span><span className="spangap">{this.props.gpa2} </span>
                    <br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject3} </span><span className="yearh"> {this.props.year3}</span><span className="spangap">{this.props.gpa3} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject4} </span><span className="yearh"> {this.props.year4}</span><span className="spangap">{this.props.gpa4} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject5} </span><span className="yearh"> {this.props.year5}</span><span className="spangap">{this.props.gpa5} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject6} </span><span className="yearh"> {this.props.year6}</span><span className="spangap">{this.props.gpa6} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject7} </span><span className="yearh"> {this.props.year7}</span><span className="spangap">{this.props.gpa7} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject8} </span><span className="yearh"> {this.props.year8}</span><span className="spangap">{this.props.gpa8} </span><br></br><div className="tab"></div>

                    <span className="subject"> {this.props.subject9} </span><span className="yearh"> {this.props.year9}</span><span className="spangap">{this.props.gpa9} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject10} </span><span className="yearh"> {this.props.year10}</span><span className="spangap">{this.props.gpa10} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject11} </span><span className="yearh"> {this.props.year11}</span><span className="spangap">{this.props.gpa11} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject12} </span><span className="yearh"> {this.props.year12}</span><span className="spangap">{this.props.gpa12} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject13} </span><span className="yearh"> {this.props.year13}</span><span className="spangap">{this.props.gpa13} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject14} </span><span className="yearh"> {this.props.year14}</span><span className="spangap">{this.props.gpa14} </span><br></br><div className="tab"></div>

                    <span className="subject"> {this.props.subject15} </span><span className="yearh"> {this.props.year15}</span><span className="spangap">{this.props.gpa15} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject16} </span><span className="yearh"> {this.props.year16}</span><span className="spangap">{this.props.gpa16} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject17} </span><span className="yearh"> {this.props.year17}</span><span className="spangap">{this.props.gpa17} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject18} </span><span className="yearh"> {this.props.year18}</span><span className="spangap">{this.props.gpa18} </span><br></br><div className="tab"></div>

                    <span className="subject"> {this.props.subject19} </span><span className="yearh"> {this.props.year19}</span><span className="spangap">{this.props.gpa19} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject20} </span><span className="yearh"> {this.props.year20}</span><span className="spangap">{this.props.gpa20} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject21} </span><span className="yearh"> {this.props.year21}</span><span className="spangap">{this.props.gpa21} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject22} </span><span className="yearh"> {this.props.year22}</span><span className="spangap">{this.props.gpa22} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject23} </span><span className="yearh"> {this.props.year23}</span><span className="spangap">{this.props.gpa23} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject24} </span><span className="yearh"> {this.props.year24}</span><span className="spangap">{this.props.gpa24} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.subject25} </span><span className="yearh"> {this.props.year25}</span><span className="spangap">{this.props.gpa25} </span><br></br><div className="tab"></div>
                    <div className="tab"></div><div className="tab"></div>
                    <span className="subject">GPA &emsp;{this.props.GPA}  </span><br></br><div className="tab"></div>
                    {/* <Linkitems   item="GPA" tolink="/GPA" activenav={this.activeitem}></Linkitems> */}
                </div>
            </div> 
        );
    }
}

export default ListGpaCom;