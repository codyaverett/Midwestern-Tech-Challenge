import React, { useState } from 'react';
import Axios from 'axios';
import './InfoText.css'

const Lorem = React.memo(({ style }) => {

    const [text, setText] = useState("");

        Axios.get("https://api.mwi.dev/content/Contact").then(
            (response)=> {
                setText(response.data.data[0].content.slice(0, 119));
            }
        );

        // slicing out 'dos' and 'trace'
    return (
        <div style={style}>
            {text.slice(0,64)}
            {text.slice(68,106)}
            {text.slice(112,119)}
        </div>
    );

})

export default Lorem
