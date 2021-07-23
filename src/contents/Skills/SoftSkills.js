import React, { Component } from 'react'
import ListSkills from '../../components/ListSkills';
class SoftSkills extends Component {
    render() {
        return(

            <div className="skill">
                <ListSkills skillsh="Soft Skills"
                skills="Skills"  lavels=""
                skill1="Punctual" lavel1=""
                skill2="Considerate / Sympathetic" lavel2=""
                skill3="Organized / Systematic" lavel3=""
                skill4="Flexible / Adaptable" lavel4=""
                skill5="Teamwork" lavel5=""
                />
               
            </div>
     
           
        )
    }
    
}
export default SoftSkills;