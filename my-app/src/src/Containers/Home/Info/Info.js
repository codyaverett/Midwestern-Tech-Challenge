import React from 'react';
import './Info.css';
import { InfoCardOne, InfoCardTwo, InfoCardThree } from '../../../Components/index';

const Info = () => {
    return (
        <div className='info-container'>
            <InfoCardOne />
            <InfoCardTwo /> 
            <InfoCardThree />         
        </div>
    )
}

export default Info
