import React, { Component } from 'react'
import ListGpa from '../../components/ListGpa';

class GPA2560 extends Component {
    render() {
        return(

            <div className="gpa">
                <ListGpa year="2560/1" subject="ENGLISH FOR EVERYDAY USE" gpa="D" 
                subject2="HEALTH EDUCATION IN THE ELEMENTARY SCHOOL" gpa2="A" 
                subject3="PRECALCULUS" gpa3="S"
                subject4="FUNDAMENTAL PHYSICS" gpa4="F"
                subject5="COMPUTER PROGRAMMING SKILL I" gpa5="W"
                subject6="FOUNDATION OF COMPUTER AND INFORMATICS" gpa6="C+"
                GPA="1.54"
                />
                 <ListGpa year="2560/2" subject="ENGLISH SKILLS DEVELOPMENT" gpa="D+"
                 subject2="SPORT EDUCATION" gpa2="A" 
                 subject3="CREATIVE SILPAKORN" gpa3="A"
                 subject4="OUTDOOR RECREATION MANAGEMENT" gpa4="A"
                 subject5="RECREATION PROGRAM IN ELEMENTARY SCHOOL" gpa5="A"
                 subject6="CALCULUS FOR COMPUTATIONAL SCIENTISTS I" gpa6="C+"
                 subject7="COMPUTER PROGRAMMING SKILL I" gpa7="A"
                 GPA="2.75"
                />
                 <ListGpa year="2560/3" subject="COMPUTER PROGRAMMING SKILL II" gpa="D"
                    GPA="2.51"
                />
            </div>

     
           
        )
    }
    
}
export default GPA2560;