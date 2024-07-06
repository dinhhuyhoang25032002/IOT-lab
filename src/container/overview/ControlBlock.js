import Point from '../../component/devices/Point';
import Arduino from '../../assets/device-imge/Arduino.png'
import STM32 from '../../assets/device-imge/stm32.png'
import React, { useState } from 'react';
import './ControlBlock.scss';
import InforDevice from './InforDevice';
const ControlBlock = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='control-block'>
            <div className='title-container'>
                <div className='title'><span>Khối điều khiển</span></div>
                <div>
                    <i style={{ fontSize: 25 }} onClick={() => setIsOpen(!isOpen)} className={isOpen === true
                        ? 'bx bx-chevron-down ' : 'bx bx-chevron-right'}></i>
                </div>
            </div>
            <div className='control-top'>
                <InforDevice isOpen={isOpen} />
                <div className='body-point'>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>SCL</span>
                    </div>
                    <div className='inf-point' >
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>SDA</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>D1</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>D2</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>D3</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>D4</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>D5</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>D6</span>
                    </div>
                </div>
                <div className='arduino-container'>

                    <div className='body-arduino'>
                        <div className='name-device' style={{ fontSize: 14 }}>ARDUINO</div>
                        <div className='image-container'>
                            <img className='img' src={Arduino} alt='Arduino' />
                        </div>

                        <div className='body-point-arduino'>
                            <div style={{ display: 'flex', gap: 5 }}>
                                <span style={{ fontSize: 10, fontWeight: 600 }}>3.3V</span>
                                <Point color='red' />
                            </div>
                            <div style={{ display: 'flex', gap: 3 }}>
                                <span style={{ fontSize: 10, fontWeight: 600 }}>GND</span>
                                <Point color='black' />
                            </div>
                            <div style={{ display: 'flex', gap: 14 }}>
                                <span style={{ fontSize: 10, fontWeight: 600 }}>5V</span>
                                <Point color='red' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='body-point'>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>D7</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>D8</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>D9</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>D10</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A1</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A2</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>TX</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>RX</span>
                    </div>
                </div>
            </div>
            <div className='control-bottom'>
                <div className='body-point'>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                </div>
                <div className='stm32-container'>
                    <div className='name-device' style={{ fontWeight: 700, fontSize: 14 }}>STM32</div>
                    <div className='stm32-img'>

                        <img className='img' src={STM32} alt='STM32' />

                    </div>
                </div>
                <div className='body-point'>
                    <div className='inf-point'>
                        <Point color='red' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>VCC</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='black' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>GND</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                    <div className='inf-point'>
                        <Point color='green' />
                        <span style={{ fontSize: 10, fontWeight: 600 }}>A/D</span>
                    </div>
                </div>
            </div>
            <div className='body-point'>
                <div className='inf-point'>
                    <Point color='red' />
                    <span style={{ fontSize: 10, fontWeight: 600 }}>VCC</span>
                </div>
                <div className='inf-point'>
                    <Point color='black' />
                    <span style={{ fontSize: 10, fontWeight: 600 }}>GND</span>
                </div>
                <div className='inf-point'>
                    <Point color='red' />
                    <span style={{ fontSize: 10, fontWeight: 600 }}>VCC</span>
                </div>
                <div className='inf-point'>
                    <Point color='black' />
                    <span style={{ fontSize: 10, fontWeight: 600 }}>GND</span>
                </div>
                <div className='inf-point'>
                    <Point color='red' />
                    <span style={{ fontSize: 10, fontWeight: 600 }}>VCC</span>
                </div>
                <div className='inf-point'>
                    <Point color='black' />
                    <span style={{ fontSize: 10, fontWeight: 600 }}>GND</span>
                </div>
                <div className='inf-point'>
                    <Point color='red' />
                    <span style={{ fontSize: 10, fontWeight: 600 }}>VCC</span>
                </div>
                <div className='inf-point'>
                    <Point color='black' />
                    <span style={{ fontSize: 10, fontWeight: 600 }}>GND</span>
                </div>

            </div>
        </div>
    );
}
export default ControlBlock;