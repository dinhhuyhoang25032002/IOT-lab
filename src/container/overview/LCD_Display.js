import LCD from '../../component/devices/LCD';
import Point from '../../component/devices/Point';
import './LCD_Display.scss';
import React, { useState } from 'react';
import InforDevice from './InforDevice';
const LCD_Display = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='display-block'>
            <div className='title-container'>
                <div className='title'><span>Khối hiển thị</span></div>
                <div>
                    <i style={{ fontSize: 25 }} onClick={() => setIsOpen(!isOpen)} className={isOpen === true
                        ? 'bx bx-chevron-down ' : 'bx bx-chevron-right'}></i>
                </div>
            </div>

            <div className='lcd-body'>
                <InforDevice isOpen={isOpen} />
                <div className='name-LCD'>
                    LCD
                </div>
                <LCD />
            </div>
            <div className='point-body'>
                <Point color='red' />
                <Point color='black' />
                <Point color='green' />
                <Point color='green' />
            </div>
        </div>
    );
}
export default LCD_Display;