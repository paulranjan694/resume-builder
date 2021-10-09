import React from 'react'
import { Link } from 'react-router-dom'
import './ResumeProjectDetail.style.scss'

function ResumeProjectDetail({projectName, techStack, summary, projectLink}) {
    return (
        <div className='projectDetail__wrapper'>
            <p>{projectName}</p>
            <p>- {summary}</p>
            <div className="techStack__wrapper">
                <p>Tech Stack :</p> 
                <div className='techStack__container'>
                    {
                        techStack.map((tech, idx) => (
                            <p key={idx}>{tech}</p>
                        ))
                    }
                </div>
                <p>
                    <span>Live - </span>
                   <Link to={projectLink}>{projectLink}</Link>
                </p>
            </div> 
        </div>
    )
}

export default ResumeProjectDetail
