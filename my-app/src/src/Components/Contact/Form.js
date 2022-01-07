import React from 'react'

const Form = (props) => {
    return (
        <div>
            <form>
                <input className={props.class} placeholder={props.label} onChange={props.func} style={props.style}></input>
            </form>
        </div>
    )
}

export default Form
