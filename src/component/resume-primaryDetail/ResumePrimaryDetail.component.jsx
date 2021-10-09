import React from 'react'
import './ResumePrimaryDetail.style.scss'

function ResumePrimaryDetail({name, jobTitle, bio,color}) {
    return (
        <div className="primaryDetails__container" style={{color: color}}>
            <div className="name">{name}</div>
            <div className="jobTitle">{jobTitle}</div>
            <div className="bio">{bio}</div>
        </div>
    )
}

export default ResumePrimaryDetail;
