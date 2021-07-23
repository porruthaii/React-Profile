import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
class GPA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'myGPA': ['2560','2561', '2562', '2563','Computer']
        }
    }

    render() {
        return(
            <div className="condiv GPA">
                <h1 className="subtopicgpa">My GPA</h1>
                <ul>
                    {this.state.myGPA.map((value) => {
                        return <li> <a className="Link-gpa" href={'/GPA/GPA'+value}>{value}</a></li>
                    })}
                </ul>
            </div>
        );
    }
}
export default GPA;