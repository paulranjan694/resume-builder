import React from 'react'

function ResumeTitle({title, color}) {
    return (
        <div className="resume-title" 
        style={{color : color ? color : 'gray'}}>
            <h3>{title.toUpperCase()}</h3>
        </div>
    )
}

export default ResumeTitle
