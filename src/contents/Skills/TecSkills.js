import React, { Component } from 'react'
import ListSkills from '../../components/ListSkills';
// import ListSkills from '../../components/ListSkills';

class TecSkills extends Component {
    render() {
        return(

            <div className="skill">
                <ListSkills skillsh="Tecnology Skills"
                skills="Skills"  lavels="Lavel"
                skill1="C" lavel1="Upper Intermediate"
                skill2="Java" lavel2="Upper Intermediate"
                skill3="C#" lavel3="Beginners"
                skill4="HTML" lavel4="Intermediate"
                skill5="PHP" lavel5="Intermediate"
                skill6="CSS" lavel6="Intermediate"
                skill7="Java Scrip" lavel7="Beginners"
                skill8="ReactJS" lavel8="Beginners"
                skill9="MySQL" lavel9="Intermediate"
                skill10="Python" lavel10="Beginners"

                />
              
            </div>
 
     
           
        )
    }
    
}
export default TecSkills;