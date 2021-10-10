import React from 'react'
import './ResumeLanguage.style.scss'

function ResumeLanguage({language,mr}) {
    return (
        <div className="language" style={{marginRight:mr}}>
            {language}
        </div>
    )
}

export default ResumeLanguage;
