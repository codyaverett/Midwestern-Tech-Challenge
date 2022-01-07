import React from 'react'
import './InfoCards.css'
import Rabbit from '../../../Assets/Rabbit.png';
import { LMBtn, HeadingTwo, Lorem } from '../../index';

const InfoCardTwo = () => {
    return (
        <div className='info-card'>
             <div className='img-wrapper'>
                <img src={Rabbit} alt='Running Rabbit'></img>
            </div>
            <HeadingTwo />
            <Lorem 
            style={{
                fontFamily: 'Poppins',
                fontSize: '10pt', 
                lineHeight: 2,
                marginRight: '-15px' }}
               />   
            <LMBtn text='Learn More'/> 
        </div>
    )
}

export default InfoCardTwo
