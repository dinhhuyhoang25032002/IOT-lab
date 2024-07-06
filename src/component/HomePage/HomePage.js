import './HomePage.scss';
import React, { useState } from "react";
import LCD from '../devices/LCD'
import Switch1 from '../devices/Switch';
import Keybroad from '../devices/Keybroad'
import Led from '../devices/Led'
import Light from '../devices/Light';
import Buzzer from '../devices/Buzzer';
import StepMotor from '../devices/StepMotor'
import Power from '../devices/Power'
import BtnPower from '../devices/BtnPower'
import btnIcon from '../../assets/device-imge/radio.png'
import keypadIcon from '../../assets/device-imge/keypad.png'
import motoIcon from '../../assets/device-imge/motor.png'
import batteryIcon from '../../assets/device-imge/battery.png'
import btnPowerIcon from '../../assets/device-imge/switch.png'
import DHT11 from '../devices/DHT11';
import buzzerIcon from '../../assets/device-imge/buzzerIcon.png'
import MQ02 from '../devices/MQ02';
import MH from '../devices/MH';
import Arduino from '../devices/Arduino';
import { Tooltip } from 'react-tooltip';
import Switch from "react-switch";
import STM32 from '../devices/STM32';
import PIR from '../devices/PIR';
import RGB from '../devices/RGB';
const HomePage = () => {
    const [elme, setElmes] = useState([]);
    const [isOpen, setOpen] = useState(true);
    const [isOnArduino, setOnArduino] = useState(false)
    const [isOnBuzzer, setOnBuzzer] = useState(false)
    const [isOnSTM32, setOnSTM32] = useState(false)
    const [isOnPIR, setOnPIR] = useState(false)

    const handleOnDrage = (event, id) => {
        event.dataTransfer.setData("itemType", id);
    };
    const handleOnDrop = (event) => {
        const itemType = event.dataTransfer.getData("itemType");
        setElmes([...elme, itemType]);

    };
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDelete = (id) => {
        const result = elme.filter((elme) => elme !== id);
        console.log('check data:', result)
        setElmes(result);

    }
    return (
        <div className="container-hp">
            <button className=' btn-list' onClick={() => setOpen(!isOpen)}><i className='bx bx-list-plus' style={{ fontSize: 29 }}></i></button>
            {isOpen && <div className="list-item">
                <div className="group-item"
                    draggable
                    onDragStart={(event) => handleOnDrage(event, "item1")}
                >
                    <i className='bx bx-window' style={{ fontSize: 24 }}></i>
                    <span>LCD</span>
                </div>
                <div className="group-item"
                    draggable
                    onDragStart={(event) => handleOnDrage(event, "item2")}>
                    <img src={btnIcon} />
                    <span>Button</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item3")}
                    draggable>
                    <img src={keypadIcon} />
                    <span>Keybroad</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item4")}
                    draggable>
                    <i className='bx bxs-bell' style={{ fontSize: 24, color: 'black' }}></i>
                    <span>LED</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item5")}
                    draggable>
                    <i style={{ fontSize: 24, color: 'black' }} className="fa-solid fa-lightbulb"></i>
                    <span>Light</span>

                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item6")}
                    draggable>
                    <img src={motoIcon} /> <span>StepMotor</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item7")}
                    draggable>
                    <img src={batteryIcon} /><span>Power</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item8")}
                    draggable>
                    <img src={btnPowerIcon} /><span>Button Power</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item9")}
                    draggable>
                    <i className='bx bxs-thermometer' style={{ fontSize: 24 }}></i><span>DHT</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item10")}
                    draggable>
                    <img src={buzzerIcon} /><span>Buzzer</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item11")}
                    draggable>
                    <i className='bx bx-chip' style={{ fontSize: 24 }}></i><span>MQ-02</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item12")}
                    draggable>
                    <i class='bx bx-brightness' style={{ fontSize: 24 }}></i><span>MH</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item13")}
                    draggable>
                    <i class="fa-solid fa-microchip" style={{ fontSize: 24 }}></i><span>Arduino</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item14")}
                    draggable>
                    <i className='bx bx-chip' style={{ fontSize: 24 }}></i><span>PIR</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item15")}
                    draggable>
                    <i class="fa-solid fa-microchip" style={{ fontSize: 24 }}></i><span>STM32</span>
                </div>
                <div className="group-item"
                    onDragStart={(event) => handleOnDrage(event, "item15")}
                    draggable>
                    <i class="fa-solid fa-microchip" style={{ fontSize: 24 }}></i><span>STM32</span>
                </div>
            </div>}
            <div className="container-item"
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}

            >
                {elme.map((item, index) => {
                    switch (item) {
                        case "item1":
                            return (
                                <>
                                    <div key={index} data-tooltip-id="item1" className='content-device'> <LCD /></div>
                                    <Tooltip id="item1"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>
                            );
                        case "item2":
                            return (
                                <>
                                    <div key={index} className='content-device' data-tooltip-id="item2"><Switch1 /></div>
                                    <Tooltip id="item2"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>
                            );
                        case "item3":
                            return (
                                <>
                                    <div key={index} className='content-device' data-tooltip-id="item3"> <Keybroad /></div>
                                    <Tooltip id="item3"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>

                            );

                        case "item4":
                            return (
                                <>
                                    <div key={index} className='content-device' data-tooltip-id="item4">  <Led fontSize="35px" /></div>
                                    <Tooltip id="item4"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>

                            );
                        case "item5":
                            return (
                                <>
                                    <div key={index} className='content-device' data-tooltip-id="item5"><Light fontSize='45px' color='gray' /></div>
                                    <Tooltip id="item5"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>

                            );

                        case "item6":
                            return (
                                <>
                                    <div key={index} className='content-device' data-tooltip-id="item6"><StepMotor /></div>
                                    <Tooltip id="item6"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>

                            );
                        case "item7":
                            return (
                                <>
                                    <div key={index} className='content-device' data-tooltip-id="item7"><Power /></div>
                                    <Tooltip id="item7"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>
                            );
                        case "item8":
                            return (
                                <>
                                    <div key={index} className='content-device' data-tooltip-id="item8">  <BtnPower /></div>
                                    <Tooltip id="item8"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>

                            );
                        case "item9":
                            return (
                                <>
                                    <div className='sensor-container' data-tooltip-id="item9">
                                        <div className='infor-sensor'>
                                            <DHT11 />
                                            <span className='text-name'>DHT11 </span>
                                        </div>

                                        <span className='parameter'>
                                            <i className='bx bxs-thermometer '></i>
                                            27&#186;C</span>
                                        <span className='parameter'>
                                            <i className="fa-solid fa-snowflake fs-19"></i>
                                            72%</span>
                                    </div>
                                    <Tooltip id="item9"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>
                            );
                        case "item10":
                            return (
                                <> <div className='sensor-container' data-tooltip-id="item13" >
                                    <div className='infor-sensor'>
                                        <Buzzer />
                                        <span className='text-name'>Buzzer </span>
                                    </div>

                                    <Switch onChange={() => setOnBuzzer(!isOnBuzzer)} checked={isOnBuzzer} uncheckedIcon={<p style={{ color: 'white', paddingLeft: 4 }}>OFF</p>} width={70} checkedIcon={<p style={{ paddingLeft: 10, color: 'white' }}>ON</p>} />

                                </div>
                                    <Tooltip id="item13"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>

                            );
                        case "item11":
                            return (
                                <> <div className='sensor-container' data-tooltip-id="item11"   >
                                    <div className='infor-sensor'>
                                        <MQ02 />
                                        <span className='text-name'>MQ-02 </span>
                                    </div>

                                    <span className='parameter'>
                                        <i className='bx bxs-thermometer'></i>
                                        270</span>

                                </div>
                                    <Tooltip id="item11"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>
                            );
                        case "item12":
                            return (
                                <> <div className='sensor-container' data-tooltip-id="item12" >
                                    <div className='infor-sensor'>
                                        <MH />
                                        <span className='text-name'>MH </span>
                                    </div>

                                    <span className='parameter'>
                                        <i class="fa-solid fa-sun fs-19"></i>
                                        27</span>

                                </div>
                                    <Tooltip id="item12"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>
                            );
                        case "item13":
                            return (
                                <> <div className='sensor-container' data-tooltip-id="item13" >
                                    <div className='infor-sensor'>
                                        <Arduino />
                                        <span className='text-name'>Arduino </span>
                                    </div>

                                    <Switch onChange={() => setOnArduino(!isOnArduino)} checked={isOnArduino} uncheckedIcon={<p style={{ color: 'white', paddingLeft: 4 }}>OFF</p>} width={70} checkedIcon={<p style={{ paddingLeft: 10, color: 'white' }}>ON</p>} />

                                </div>
                                    <Tooltip id="item13"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>
                            );
                        case "item14":
                            return (
                                <> <div className='sensor-container' data-tooltip-id="item14" >


                                    <div className='infor-sensor'>
                                        <PIR />
                                        <span className='text-name ' style={{ width: 75 }}>Cảm biến hồng ngoại</span>
                                    </div>

                                    <div style={{ marginBottom: 10 }}>
                                        <Switch onChange={() => setOnPIR(!isOnPIR)} checked={isOnPIR}
                                            uncheckedIcon={<p style={{ color: 'white', paddingLeft: 4, fontSize: 13, paddingTop: 4 }}>FALSE</p>} width={70}
                                            checkedIcon={<p style={{ color: 'white', paddingLeft: 6, fontSize: 13, paddingTop: 4 }}>TRUE</p>} />
                                    </div>
                                </div>
                                    <Tooltip id="item14"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>
                            );
                        case "item15":
                            return (
                                <> <div className='sensor-container' data-tooltip-id="item15" >
                                    <div className='infor-sensor'>
                                        <STM32 />
                                        <span className='text-name'>STM32 </span>
                                    </div>

                                    <Switch onChange={() => setOnSTM32(!isOnSTM32)} checked={isOnSTM32} uncheckedIcon={<p style={{ color: 'white', paddingLeft: 4 }}>OFF</p>} width={70} checkedIcon={<p style={{ paddingLeft: 10, color: 'white' }}>ON</p>} />

                                </div>
                                    <Tooltip id="item15"
                                        clickable
                                        place='bottom'
                                        style={{ zIndex: 3 }}
                                    >
                                        <button onClick={() => handleDelete(item)} className='btn btn-success'>Delete</button>
                                    </Tooltip >
                                </>
                            );
                        default:
                            break;
                    }
                })}
            </div>
        </div >
    )
}
export default HomePage;