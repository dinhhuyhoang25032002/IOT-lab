import Light from "../../component/devices/Light";
import Point from "../../component/devices/Point";
import StepMotor from "../../component/devices/StepMotor";
import RelayImg from '../../assets/device-imge/relay.png'
import StepMotorImg from "../../assets/device-imge/step-motor.png";
import './EnforcementBlock.scss';
import InforDevice from './InforDevice';
import React, { useState } from 'react';
const EnforcementBlock = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='enforcement-block'>
            <div className='title-container'>
                <div className='title'> <span>Khối chấp hành</span></div>
                <div>
                    <i style={{ fontSize: 25 }} onClick={() => setIsOpen(!isOpen)} className={isOpen === true
                        ? 'bx bx-chevron-down ' : 'bx bx-chevron-right'}></i>
                </div>
            </div>
            
            <div className="container-device">
                <InforDevice isOpen={isOpen} />
                <div className="container-left">
                    <div style={{ display: 'flex' }}>
                        <div className="image-container">
                            <img className='img' src={RelayImg} alt='Relay' />
                        </div>
                        <div className="relay-container">
                            <Light />
                            <div className="title">RE LAY</div>
                        </div>
                    </div>

                    <div className="point-container">
                        <div className=" content-point">
                            <Point color='red' />
                            <span style={{ fontSize: 10, fontWeight: 700 }}>VCC</span>
                        </div>
                        <div className=" content-point">
                            <Point color='black' />
                            <span style={{ fontSize: 10, fontWeight: 700 }}>GND</span>
                        </div>
                        <div className=" content-point">
                            <Point color='green' />
                            <span style={{ fontSize: 10, fontWeight: 700 }}>DATA</span>
                        </div>
                    </div>
                </div>
                <div className="container-right">
                    <div className="device-container">
                        <StepMotor />
                        <div className="point-container">
                            <div className=" content-point">
                                <Point color='red' />
                                <span style={{ fontSize: 10, fontWeight: 700 }}>VCC</span>
                            </div>
                            <div className=" content-point">
                                <Point color='black' />
                                <span style={{ fontSize: 10, fontWeight: 700 }}>GND</span>
                            </div>
                            <div className=" content-point">
                                <Point color='green' />
                                <span style={{ fontSize: 10, fontWeight: 700 }}>DATA</span>
                            </div>

                        </div>

                    </div>

                    <div className="image-container">
                        <span style={{ fontSize: 14, fontWeight: 700 }}>STEP MOTOR</span>
                        <div className="image-content">
                            <img className='img' src={StepMotorImg} alt='Step-motor' />
                        </div>
                        <div className="point-container">
                            <div className=" content-point">
                                <Point color='red' />
                                <span style={{ fontSize: 10, fontWeight: 700 }}>VCC</span>
                            </div>
                            <div className=" content-point">
                                <Point color='black' />
                                <span style={{ fontSize: 10, fontWeight: 700 }}>GND</span>
                            </div>
                            <div className=" content-point">
                                <Point color='green' />
                                <span style={{ fontSize: 10, fontWeight: 700 }}>DATA</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EnforcementBlock;