import React, { Component } from 'react'
import ListGpa from '../../components/ListGpa';

class GPA2561 extends Component {
    render() {
        return(

            <div className="gpa">
                <ListGpa year="2561/1" subject="SCIENTIFIC ENGLISH" gpa="C" 
                subject2="ELEMENTARY STATISTICS" gpa2="C" 
                subject3="NATURAL ENVIRONMENT AND CULTURAL HERITAGE CONSERVATION" gpa3="A"
                subject4="DATA STRUCTURES" gpa4="W"
                subject5="DIGITAL LOGIC DESIGN" gpa5="B"
                subject6="PROGRAMMING STATISTICAL LEARNING FOR BIG DATA" gpa6="C"
                GPA="2.55"
                />
                 <ListGpa year="2561/2" subject="COMMUNICATIVE ENGLISH" gpa="C+"
                 subject2="CALCULUS FOR COMPUTATIONAL SCIENTISTS II" gpa2="D+" 
                 subject3="DATA STRUCTURES" gpa3="C"
                 subject4="COMPUTER ORGANIZATION AND ARCHITECTURE" gpa4="C"
                 subject5="DATA COMMUNICATIONS AND COMPUTER NETWORKS" gpa5="D"
                 subject6="DATABASE SYSTEMS" gpa6="D+"
                //  subject7="PROGRAMMING STATISTICAL LEARNING FOR BIG DATA" gpa7="A"
                 GPA="2.30"
                />
            </div>

     
           
        )
    }
    
}
export default GPA2561;