import React from 'react';
import './InfoCards.css';

import Talkie from '../../../Assets/Talkie.png';
import { LMBtn, HeadingTwo, Integer } from '../../index';

const InfoCardOne = () => {
    return (
        <div className='info-card'>
            <div className='img-wrapper'>
                <img src={Talkie} alt='A Walkie Talkie' />
            </div>
            <HeadingTwo />
            <Integer />
            <LMBtn text='Learn More'/>
        </div>
    )
}

export default InfoCardOne
