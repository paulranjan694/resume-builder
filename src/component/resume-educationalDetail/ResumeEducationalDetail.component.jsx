import React from 'react'
import './ResumeEducationalDetail.style.scss'

function ResumeEducationalDetail({collegeName, degree, cgpa, collegeCity, graduationMonth, graduationYear,width}) {
    return (
       <div className="educationalDetail__container">
           <p>{degree}</p>
            <p>{collegeName}, {collegeCity}</p>
            <div className="otherDetails" style={{width: width}}>
                <p>{graduationMonth}/{graduationYear}</p>
                <p>with {cgpa} CGPA</p>
            </div>
       </div>
    )
}

export default ResumeEducationalDetail;
