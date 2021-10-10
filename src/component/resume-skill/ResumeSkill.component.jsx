import React from 'react'
import './ResumeSkill.style.scss'

function ResumeSkill({skill, styles}) {
    const {background , color, border} = styles
    return (
        <div className="skill" style={{background : background, color : color, border:border}}>{skill}</div>
    )
}

export default ResumeSkill;

