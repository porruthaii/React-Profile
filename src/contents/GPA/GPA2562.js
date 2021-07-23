import React, { Component } from 'react'
import ListGpa from '../../components/ListGpa';

class GPA2562 extends Component {
    render() {
        return(

            <div className="gpa">
                <ListGpa year="2562/1" subject="THAI FOR COMMUNICATION" gpa="C+" 
                subject2="FUNDAMENTAL PHYSICS" gpa2="D" 
                subject3="DISCRETE COMPUTATIONAL STRUCTURES" gpa3="D"
                subject4="ALGORITHM ANALYSIS AND DESIGN" gpa4="F"
                subject5="OPERATING SYSTEMS" gpa5="C+"
                subject6="MOBILE APPLICATION DEVELOPMENT" gpa6="C"
                subject7="LAWS AND ETHICS IN INFORMATION TECHNOLOGY" gpa7="D"
                subject8="SYSTEM ANALYSIS AND DESIGN" gpa8="C+"
                GPA="2.20"
                />
                 <ListGpa year="2562/2" subject="LINEAR ALGEBRA WITH APPLICATIONS" gpa="D+"
                 subject2="OBJECT-ORIENTED SOFTWARE DEVELOPMENT" gpa2="A" 
                 subject3="THEORY OF COMPUTATION" gpa3="A"
                 subject4="RESEARCH METHODS" gpa4="A"
                 subject5="SELECTED TOPICS IN COMPUTER SCIENCE VI" gpa5="A"
                 subject6="SOFTWARE ENGINEERING" gpa6="C+"
                 subject7="INFORMATION STORAGE AND RETRIEVAL" gpa7="A"
                 GPA="2.22"
                />
            </div>

     
           
        )
    }
    
}
export default GPA2562;