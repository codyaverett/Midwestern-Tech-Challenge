import React from 'react'
import './InfoCards.css'
import Shield from '../../../Assets/Shield.png';
import { LMBtn, HeadingTwo, Lorem } from '../../index';

const InfoCardThree = () => {
    return (
        <div className='info-card'>
             <div className='img-wrapper'>
                <img src={Shield} alt='A Shield'></img>
            </div>
            <HeadingTwo />
            <Lorem style={{
                fontFamily: 'Poppins',
                fontSize: '10pt', 
                lineHeight: 2,
                marginRight: '-15px'
                }}/> 
            <LMBtn text='Learn More'/>  
        </div>
    )
}

export default InfoCardThree
