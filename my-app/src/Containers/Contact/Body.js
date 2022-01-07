import React, {useState} from 'react'
import { HeadingOne, Proin, HeadingTwo, Lorem2, LMBtn, Form } from '../../Components/index'
import './Body.css'


const Body = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [title, setTitle] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    const payload = {
        'first_name': firstName,
        'last_name': lastName,
        'title': title,
        'email': email,
        'message': message
    }

    const postData = () => {
        fetch('https://api.mwi.dev/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then (() => {
            alert("Thanks for your submission!")
        })

    }

    return (
        <div className='body-container'>
            <div className='left-side'>
                <HeadingOne />
                 <Lorem2 />
                 <Proin /> 
            </div>
            <div className='right-side'>
                <HeadingTwo />
                <div className='contact-form'>
                    <div ><Form label='First Name' func={e => setFirstName(e.target.value)} class='frm-one'/> </div>
                    <div ><Form label='Last Name' func={e => setLastName(e.target.value)} class='frm-two'/></div>
                    <div ><Form label='Title' func={e => setTitle(e.target.value)} class='frm-three'/></div>
                    <div ><Form label='Email' func={e => setEmail(e.target.value)} class='frm-four'/></div>
                    <div ><Form label='Message' func={e => setMessage(e.target.value)} class='big-frm'/></div>
                </div>
                <span className='submit-btn'><LMBtn text='Submit' func={postData}/></span>
            </div>
        </div>
    )
}

export default Body
