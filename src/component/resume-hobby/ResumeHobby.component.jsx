import React from 'react'
import './ResumeHobby.style.scss'

function ResumeHobby({hobby, mr}) {
    return (
        <div className='hobby' style={{marginRight:mr}}>
            {hobby}
        </div>
    )
}

export default ResumeHobby;