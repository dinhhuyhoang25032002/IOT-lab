import Led from '../../component/devices/Led';
import Point from '../../component/devices/Point';
import G4Image from '../../assets/device-imge/4g.png'
import Wifi from '../../assets/device-imge/wifi.png'
import Lora from '../../assets/device-imge/Lora.png'
import './MediaBlock.scss'
import InforDevice from './InforDevice';
import React, { useState } from 'react';
const MediaBlock = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='media-block'>
            <div className='title-container'>
                <div className='title'><span>Khối truyền thông</span></div>
                <div>
                    <i style={{ fontSize: 25 }} onClick={() => setIsOpen(!isOpen)} className={isOpen === true
                        ? 'bx bx-chevron-down ' : 'bx bx-chevron-right'}></i>
                </div>
            </div>
            <div className="LCD-body">
                <InforDevice isOpen={isOpen} />
                <div className='LCD-container'>
                    <Led color="green" />
                    <span className='text'>4G/5G</span>
                </div>
                <div className='LCD-container'>
                    <Led color="green" />
                    <span className='text'>WIFI/BLE</span>
                </div>
                <div className='LCD-container'>
                    <Led color="green" />
                    <span className='text'>ZIGBEE/LORA</span>
                </div>
                <div className='LCD-container'>
                    <Led color="green" />
                    <span className='text'>UART/SPI/I2C</span>
                </div>

            </div>
            <div className='device-container'>
                <div className='device-top'>
                    <div className='device-left'>
                        <div className='point-container'>
                            <div className='point-content'>
                                <Point color='green' />
                                <span className='text'>TX</span>
                            </div>
                            <div className='point-content'>
                                <Point color='green' />
                                <span className='text'>RX</span>
                            </div>
                            <div className='point-content'>
                                <Point color='green' />
                                <span className='text'>RST</span>
                            </div>
                        </div>
                        <span style={{ fontWeight: 700, fontSize: 14 }}>4G/5G</span>
                        <div className='image-container'>


                            <img src={G4Image} className='img' alt='4G/5G' />

                        </div>
                        <div className='point-container'>
                            <div className='point-content'>
                                <span className='text'>VCC</span>
                                <Point color='red' />

                            </div>
                            <div className='point-content'>
                                <span className='text'>GND</span>
                                <Point color='black' />

                            </div>
                            <div className='point-content'>
                                <span className='text'>ANT</span>
                                <Point color='green' />

                            </div>
                        </div>
                    </div>
                    <div className='device-right'>
                        <div className='point-container'>
                            <div className='point-content'>
                                <Point color='green' />
                                <span className='text'>TX</span>
                            </div>
                            <div className='point-content'>
                                <Point color='green' />
                                <span className='text'>RX</span>
                            </div>
                            <div className='point-content'>
                                <Point color='green' />
                                <span className='text'>RST</span>
                            </div>
                            <div className='point-content'>
                                <Point color='green' />
                                <span className='text'>A0</span>
                            </div>
                        </div>
                        <span style={{ fontWeight: 700, fontSize: 14 }}>WIFI/BLE</span>
                        <div className='image-container'>
                            <img className='img' src={Wifi} alt='Wifi' />
                        </div>
                        <div className='point-container'>
                            <div className='point-content'>
                                <span className='text'>VCC</span>
                                <Point color='red' />
                            </div>
                            <div className='point-content'>
                                <span className='text'>GND</span>
                                <Point color='black' />
                            </div>
                            <div className='point-content'>
                                <span className='text'>D1</span>
                                <Point color='green' />
                            </div>
                            <div className='point-content'>
                                <span className='text'>D2</span>
                                <Point color='green' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='device-bottom'>
                    <div className='left'>
                        <span style={{ fontWeight: 700, fontSize: 14 }}>LORA/ZIGBEE</span>
                        <div className='image-container'>
                            <img className='img' src={Lora} alt='Lora' />
                        </div>
                    </div>

                    <div className='point-container'>
                        <div className='point-content'>
                            <span className='text' style={{ width: 27 }}>VCC</span>
                            <Point color='red' />
                            <Point color='green' />
                            <span className='text' style={{ width: 27 }}>AUX</span>
                        </div>
                        <div className='point-content'>
                            <span className='text' style={{ width: 27 }}>GND</span>
                            <Point color='black' />
                            <Point color='green' />
                            <span className='text' style={{ width: 27 }}>M2</span>
                        </div>
                        <div className='point-content'>
                            <span className='text' style={{ width: 27 }}>TX</span>
                            <Point color='green' />
                            <Point color='green' />
                            <span className='text' style={{ width: 27 }}>M1</span>
                        </div>
                        <div className='point-content'>
                            <span className='text' style={{ width: 27 }}>RX</span>
                            <Point color='green' />
                            <Point color='black' />
                            <span className='text' style={{ width: 27 }}>GND</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MediaBlock;