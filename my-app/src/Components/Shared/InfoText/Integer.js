import React, { useState } from 'react';
import Axios from 'axios';
import './InfoText.css'

function Integer() {

    const [text, setText] = useState("");

        Axios.get("https://api.mwi.dev/content/Home").then(
            (response)=> {
                setText(response.data.data[0].content);
            }
        );

    return (
        <div className='integer-text'>
            <span className='frst-lns'>{text.slice(0,70)}</span>
            <span>{text.slice(70, 103)}</span> 
        </div>
    );

}

export default Integer

