import Point from '../../component/devices/Point';
import Keybroad from '../../component/devices/Keybroad';
import Switch1 from '../../component/devices/Switch';
import PIR from '../../assets/device-imge/PIR.png'
import DHT11 from '../../assets/device-imge/DHT11.jpg'
import Buzzer from '../../assets/device-imge/Buzzer.png'
import MQ2 from '../../assets/device-imge/MQ2.png'
import MH from '../../assets/device-imge/MH.png'
import RGB from '../../assets/device-imge/RGB.png'
import React, { useState } from 'react';
import './InputSensor.scss'
import InforDevice from './InforDevice';
const InputSensor = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='input-sensor-block'>
            <div className='title-container'>
                <div className='title'>Khối cảm biến và input</div>
                <div>
                    <i style={{ fontSize: 25 }} onClick={() => setIsOpen(!isOpen)} className={isOpen === true
                        ? 'bx bx-chevron-down ' : 'bx bx-chevron-right'}></i>
                </div>
            </div>

            <div className='divice'>
                <InforDevice isOpen={isOpen} />
                <div style={{ display: 'flex' }} >
                    <div className='divice-body active'>
                        <div className='point-body-top'>
                            <div className='vcc-point'>
                                <Point color='red' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>VCC</div>
                            </div>
                            <div className='data-point'>
                                <Point color='green' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>DATA</div>
                            </div>
                            <div className='ground-point'>
                                <Point color='black' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>GND</div>
                            </div>
                        </div>
                        <div className='device-bottom'>
                            <div className='name-device cross'>
                                PIR
                            </div>
                            <div className='device-container'>

                                <img className='PIR-img' src={PIR} alt='PIR' />

                            </div>
                        </div>
                    </div>
                    <div className='divice-body'>
                        <div className='point-body-top'>
                            <div className='vcc-point'>
                                <Point color='red' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>VCC</div>
                            </div>
                            <div className='data-point'>
                                <Point color='green' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>DATA</div>
                            </div>
                            <div className='ground-point'>
                                <Point color='black' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>GND</div>
                            </div>
                        </div>
                        <div className='device-bottom'>
                            <div className='name-device'>
                                DHT11
                            </div>
                            <div className='device-container'>

                                <img className='PIR-img' src={DHT11} alt='DHT11' />


                            </div>
                        </div>
                    </div>
                    <div className='divice-body'>
                        <div className='point-body-top'>
                            <div className='vcc-point'>
                                <Point color='red' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>VCC</div>
                            </div>
                            <div className='data-point'>
                                <Point color='green' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>DATA</div>
                            </div>
                            <div className='ground-point'>
                                <Point color='black' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>GND</div>
                            </div>
                        </div>
                        <div className='device-bottom'>
                            <div className='name-device'>
                                BUZZER
                            </div>
                            <div className='device-container'>

                                <img className='PIR-img' src={Buzzer} alt='Buzzer' />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div className='divice-body active'>
                        <div className='device-bottom'>
                            <div className='name-device'>
                                MQ-02
                            </div>
                            <div className='device-container'>
                                <img className='PIR-img' src={MQ2} alt='MQ-02' />
                            </div>
                        </div>
                        <div className='point-body-top'>
                            <div className='vcc-point'>
                                <Point color='red' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>VCC</div>
                            </div>
                            <div className='data-point'>
                                <Point color='green' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>DATA</div>
                            </div>
                            <div className='ground-point'>
                                <Point color='black' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>GND</div>
                            </div>
                        </div>
                    </div>
                    <div className='divice-body'>
                        <div className='device-bottom'>
                            <div className='name-device'>
                                MH
                            </div>
                            <div className='device-container'>


                                <img className='PIR-img' src={MH} alt='MH' />

                            </div>
                        </div>
                        <div className='point-body-top'>
                            <div className='vcc-point'>
                                <Point color='red' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>VCC</div>
                            </div>
                            <div className='data-point'>
                                <Point color='green' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>DATA</div>
                            </div>
                            <div className='ground-point'>
                                <Point color='black' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>GND</div>
                            </div>
                        </div>
                    </div>
                    <div className='divice-body'>

                        <div className='device-bottom'>
                            <div className='name-device' style={{ marginLeft: 6 }} >
                                RGB
                            </div>
                            <div className='device-container device-size'>

                                <img className='PIR-img' src={RGB} alt='RGB' />

                            </div>
                            <div>
                                <span style={{ fontSize: 10, fontWeight: 700 }}>GND</span>
                                <Point />
                            </div>

                        </div>
                        <div className='point-body-top'>
                            <div className='vcc-point rgb'>
                                <Point color='green' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>R</div>
                            </div>
                            <div className='data-point rgb'>
                                <Point color='green' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>G</div>
                            </div>
                            <div className='ground-point rgb'>
                                <Point color='green' />
                                <div style={{ fontSize: 10, fontWeight: 700 }}>B</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='body-bottom'>
                    <div className='switch-body'>
                        <div className='switch-left'>
                            <span style={{ fontSize: 14, fontWeight: 700 }}>SW1</span>
                            <Switch1 />
                            <Point color='green' />
                            <span style={{ fontSize: 10, fontWeight: 700 }}>DATA</span>
                        </div>
                        <div className='switch-right'>
                            <span style={{ fontSize: 14, fontWeight: 700 }}>SW1</span>
                            <Switch1 />
                            <Point color='green' />
                            <span style={{ fontSize: 10, fontWeight: 700 }}>DATA</span>
                        </div>
                    </div>
                    <div className='body-keybroad' >
                        <div style={{ marginLeft: 10, marginRight: 10 }}>
                            <div style={{ fontSize: 14, fontWeight: 700, textAlign: 'center' }}><span>KEY BROAD</span></div>
                            <Keybroad />
                        </div>

                        <div className='value-keybroad' style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <div style={{ display: 'flex', gap: 10 }}>
                                <Point color='green' />
                                <Point color='green' />
                                <Point color='green' />
                            </div>
                            <div style={{ display: 'flex', gap: 10 }}>
                                <Point color='green' />
                                <Point color='green' />
                                <Point color='green' />
                            </div>
                            <div style={{ display: 'flex', gap: 10 }}>
                                <div>
                                    <Point color='green' />
                                    <span style={{ fontSize: 10, fontWeight: 700 }}> 1</span>
                                </div>
                                <div>
                                    <Point color='green' />
                                    <span style={{ fontSize: 10 }}> 2</span>
                                </div>
                                <div>
                                    <Point color='green' />
                                    <span style={{ fontSize: 10 }}> 3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default InputSensor;