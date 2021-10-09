import React from 'react'
import './ResumeExperienceDetail.style.scss'

function ResumeExperienceDetail({companyName, duration, position, description}) {
    return (
        <div className='workExperience__container'>
            <p>{position}</p>
            <p>{companyName}</p>
            <p>{duration}</p>
            {
                description ? (
                    <div className='workexp__details'>
                        <p>Task :</p>
                        <p>- {description}</p>
                    </div>
                ) : ''
            }
            
        </div>
    )
}

export default ResumeExperienceDetail;
