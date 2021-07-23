import React, { Component } from 'react'
import ListGpa from '../../components/ListGpa';

class GPA2563 extends Component {
    render() {
        return(

            <div className="gpa">
                <ListGpa year="2563/1" subject="WORLD OF TECHNOLOGY AND INNOVATION" gpa="B" 
                subject2="PROBABILITY FOR COMPUTER SCIENTIST" gpa2="D+" 
                subject3="COMPUTER PROGRAMMING SKILL II" gpa3="B+"
                subject4="ALGORITHM ANALYSIS AND DESIGN" gpa4="D"
                subject5="PRINCIPLES OF PROGRAMMING LANGUAGES" gpa5="D"
                subject6="DIGITAL MULTIMEDIA" gpa6="B"
                GPA="2.31"
                />
                 <ListGpa year="2563/2" subject="ASEAN MUSIC CULTURE" gpa="A"
                 subject2="NUTRITION" gpa2="A" 
                 subject3="RESEARCH PROJECT I" gpa3="S"
                 subject4="HUMAN COMPUTER INTERACTION AND INTERFACE DESIGN" gpa4="B"
                 subject5="	GAME DESIGN AND DEVELOPMENT" gpa5="C+"
                 
                 GPA="2.39"
                />
                 <ListGpa year="2563/3" subject="RESEARCH PROJECT II" gpa="S"
                    GPA="2.39"
                />
            </div>

     
           
        )
    }
    
}
export default GPA2563;