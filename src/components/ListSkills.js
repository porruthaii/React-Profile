import React, { Component } from 'react'
// import Linkitems from './Linkitems';
class ListSkills extends Component {
    render() {
        return(
            <div className="ListSkills">
                <div className="wide-con">
                <h1>{this.props.skillsh}</h1>
                    {/* <span className="subjecth"><b>Course</b></span><span className="spangaph"><b>Grade</b></span><br></br><div className="tab"></div><br></br> */}

                    <span className="subject"> <b>{this.props.skills}</b> </span><span className="spangap"><b>{this.props.lavels}</b> </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.skill1} </span><span className="spangap">{this.props.lavel1} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.skill2} </span><span className="spangap">{this.props.lavel2} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.skill3} </span><span className="spangap">{this.props.lavel3} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.skill4} </span><span className="spangap">{this.props.lavel4} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.skill5} </span><span className="spangap">{this.props.lavel5} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.skill6} </span><span className="spangap">{this.props.lavel6} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.skill7} </span><span className="spangap">{this.props.lavel7} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.skill8} </span><span className="spangap">{this.props.lavel8} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.skill9} </span><span className="spangap">{this.props.lavel9} </span><br></br><div className="tab"></div>
                    <span className="subject"> {this.props.skill10} </span><span className="spangap">{this.props.lavel10} </span><br></br>

                    <span className="subject"><b>{this.props.explainh}  </b> </span><br></br><br></br>
                    <span className="subject "><a href={this.props.linkplain}>{this.props.nameplain}</a> </span> <br></br>
                </div>
                <br></br><br></br>
            </div>
        );
    }
}

export default ListSkills;