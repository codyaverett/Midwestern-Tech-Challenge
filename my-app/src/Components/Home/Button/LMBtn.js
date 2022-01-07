import React from 'react';
import './LMBtn.css';


const LMBtn = (props) => {
    return (
        <div className='lm-btn' onClick={props.func}>{props.text}</div>
    )
}

export default LMBtn;
