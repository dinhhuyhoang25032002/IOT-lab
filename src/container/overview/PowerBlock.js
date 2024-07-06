import Led from '../../component/devices/Led';
import BtnPower from '../../component/devices/BtnPower';
import Power from '../../component/devices/Power';
import Point from '../../component/devices/Point';
import React, { useState } from 'react';
import InforDevice from './InforDevice';
import './PowerBlock.scss';

const PowerBlock = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='power-block'>
            <div className='title'>
                <div className='content-title'>
                    <span >Khối nguồn</span>
                </div>
                <div>
                    <i style={{ fontSize: 25 }} onClick={() => setIsOpen(!isOpen)} className={isOpen === true
                        ? 'bx bx-chevron-down ' : 'bx bx-chevron-right'}></i>
                </div>
            </div>
            <div className='device'>
                <InforDevice isOpen={isOpen} />
                <div className='device-left'>
                    <div className='lcd-btn-power'>
                        <BtnPower />
                        <Power />
                    </div>
                </div>
                <div className='device-right'>
                    <div className='led-body'>
                        <Led color='red' />
                        <Led color='yellow' />
                        <Led color='green' />
                    </div>
                    <div className='point-body'>
                        <div className='point-top'>
                            <Point color='red' />
                            <Point color='red' />
                            <Point color='red' />
                        </div>
                        <div className='point-bottom'>
                            <Point color='black' />
                            <Point color='black' />
                            <Point color='black' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PowerBlock;