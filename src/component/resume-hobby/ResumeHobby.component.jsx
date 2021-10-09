import React from 'react'
import './ResumeHobby.style.scss'

function ResumeHobby({hobby}) {
    return (
        <div className='hobby'>
            {hobby}
        </div>
    )
}

export default ResumeHobby;