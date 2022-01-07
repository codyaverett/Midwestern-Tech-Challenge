import React from 'react'
import './Puzzle.css'

const Prompt = ({getLinkState}) => {
    return (
        <div className='puzzle-prompt'>
        Remove the duplicates in 2 Javascript objects (found in readme), add the results 
        to an array and output the list of distinct names in an unordered list below this
        paragraph when <span id='puzzle-link' onClick={getLinkState}>this link</span> is clicked. If the operation has been completed
        already, notify the user that this has already been done.
        </div>
    )
}

export default Prompt
