import React, { useState } from 'react';
import Axios from 'axios';
import './InfoText.css'

const Proin = React.memo(() => {

    const [text, setText] = useState("");

        Axios.get("https://api.mwi.dev/content/Contact").then(
            (response)=> {
                setText(response.data.data[0].content.slice(134, 237));
            }
        );

    return (
        <p className='proin-text'>
            {text}
        </p>
    );
})

export default Proin
