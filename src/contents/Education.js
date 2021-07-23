import React, { Component } from 'react'
import Widecard from '../components/Widecard';
// import LoggingButton from '../components/LoggingButton';
import Linkitems from '../components/Linkitems';

 class Education extends Component {

     render() { 
   
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 <Widecard  title="มหาวิทยาลัยศิลปากร คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์" where="University" from="2018 - " to="2021" />
                 {/* <LoggingButton /> */}
                 <Linkitems item="GPA" tolink="/GPA" /> <Linkitems item="Skill" tolink="/Skills" />

             </div>
         );
     }

   
 }
 
 
 export default Education;