import React, { Component } from 'react'
import ListSkills from '../../components/ListSkills';
class Project extends Component {
    render() {
        return(

            <div className="skill">
                <ListSkills skillsh="Project"
                skills="เครื่องมือที่ใช้พัฒนา"  lavels=""
                skill1="PHP" lavel1=""
                skill2="HTML" lavel2=""
                skill3="CSS" lavel3=""
                skill4="Java Scrip" lavel4=""
                skill5="MySQL" lavel5=""
                skill6="RDF API" lavel6=""
                skill7="Program Potege" lavel7=""
                skill8="Ontology" lavel8=""

                explainh="รายละเอียด" 
                nameplain="การพัฒนาระบบค้นหาร้านอาหารไทยด้วย ออนโทโลยี"
                linkplain= "https://drive.google.com/file/d/1LrgnwoiLN1Gu9RoAHZX3j-Cm0vyaWUms/view?usp=sharing"

                />

                <div>
               
                </div>
            </div>
            
           
        )
    }
    
}
export default Project;