import React, { useState } from 'react';
import Axios from 'axios';


const Lorem2 = React.memo(({ style }) => {

    const [text, setText] = useState("");

        Axios.get("https://api.mwi.dev/content/Contact").then(
            (response)=> {
                setText(response.data.data[0].content.slice(0, 134));
            }
        );

        // Made a 2nd Lorem component for Contact page. Tried passing the 2nd value of the 
        // .slice method (above) as a prop so I could alter the length and reuse the 
        // Lorem component rather than making two. It didn't throw an error, but it also didn't work.
        // Will learn more about this but I'm just making a 2nd component for now as a [suboptimal] solution.

    return (
        <p style={style}>
            {text}
        </p>
    );

})

export default Lorem2
