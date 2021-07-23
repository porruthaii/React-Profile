import React, { Component } from 'react'

class Skills extends Component {
    render() {
        return(
            <div className="condiv skills">
                <h1 className="subtopicskills">My Skills</h1>
                <ul>
                    <li> <a className="Link-skills" href="/TecSkills">Technical Skills</a></li>
                    <li> <a className="Link-skills" href="/SoftSkills">Soft Skills</a></li>
                    <li> <a className="Link-skills" href="/Project">Project</a></li>
                </ul>
            </div>
        );
    }
}

export default Skills;