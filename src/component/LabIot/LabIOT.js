import React, { useState, useEffect } from "react";
import "./LabIOT.scss"
import 'firebase/database'; // Import module cho Firebase Database
import app from '../../utils/firebase';
import Keybroad from '../devices/Keybroad'
import Switch1 from "../devices/Switch";
import LCD from '../devices/LCD'
import Power from "../devices/Power";
import { getDatabase, ref, onValue } from "firebase/database"
import ChartValue from "../chartvalue/ChartValue"
import DetailDevice from "./ModalDetail/DetailDevice";
import StepMotor from "../devices/StepMotor";
import Laptop from "../devices/Laptop";
import BtnPower from "../devices/BtnPower";
const LabIOT = (props) => {
    const [valueBtn, setValueBtn] = useState("");
    const [onPowerBtn, setStatusBtnPower] = useState(false);
    const [temperatureLevel, setTemperatureLevel] = useState(null);
    const [humidityLevel, setHumidityLevel] = useState(null);
    const [gasLevel, setGasLevel] = useState(null);
    const [lightLevel, setLightLevel] = useState(null);
    const [checkConnect, SetConnectData] = useState(false);
    const [checkStatusBtnSwitch, setStatusBtnSwitch] = useState(false);

    const [isOpenModal, setOpenModal] = useState(false);
    const handleChangePowerBtn = () => {
        setStatusBtnPower(!onPowerBtn);
        if (onPowerBtn === false) {
            setValueBtn("");
        }
    }

    useEffect(() => {
        const db = getDatabase(app);
        const dbTemperatureRef = ref(db, `sensor/temperature`);
        const dbHumidityRef = ref(db, `sensor/humidity`);
        const dbGasRef = ref(db, `sensor/gas`);
        const dbLightRef = ref(db, `sensor/light`);

        // Lắng nghe sự thay đổi của dữ liệu từ Firebase Realtime Database

        const unsubscribeValueFireBase = () => {
            onValue(dbTemperatureRef, (snapshot) => {
                if (snapshot.exists()) {
                    const temperatureLevel = snapshot.val();
                    setTemperatureLevel(temperatureLevel);

                } else {
                    setTemperatureLevel(null);
                }
            });

            onValue(dbHumidityRef, (snapshot) => {
                if (snapshot.exists()) {
                    const humidityLevel = snapshot.val();
                    setHumidityLevel(humidityLevel);
                } else {
                    setHumidityLevel(null);
                }
            });

            onValue(dbGasRef, (snapshot) => {
                if (snapshot.exists()) {
                    const gasLevel = snapshot.val();
                    setGasLevel(gasLevel);
                } else {
                    setGasLevel(null);
                }
            });

            onValue(dbLightRef, (snapshot) => {
                if (snapshot.exists()) {
                    const lightLevel = snapshot.val();
                    setLightLevel(lightLevel);

                } else {
                    setLightLevel(null);
                }
            });
        }

        // Trả về hàm để dừng lắng nghe khi component unmount
        return () => {
            unsubscribeValueFireBase();
        };
    }, []);

    return (

        < div className=" lab-container" >
            {/* {console.log('check data lab iot', humidityLevel, temperatureLevel, gasLevel)} */}

            <div className=" lab-body">
                <DetailDevice isOpen={isOpenModal} closeModalDoctorSchedule={() => setOpenModal(!isOpenModal)} />
                <div className="lab-content-left">
                    <div className="container-power-up">
                        <div className="btn-power-up">
                            <BtnPower handleChangePowerBtn={handleChangePowerBtn} />
                            <i className={onPowerBtn === true ? "fa-solid fa-lightbulb led-on" : "fa-solid fa-lightbulb"}></i>
                        </div>
                        <div className="lcd-display">
                            <div className="display-col">
                                <Power onPowerBtn={onPowerBtn} setOpenModal={setOpenModal} />
                                <span>Nguồn</span>
                            </div>

                            <LCD checkConnect={checkConnect} valueBtn={valueBtn}
                                onPowerBtn={onPowerBtn} gasLevel={gasLevel}
                            />
                        </div>
                    </div>

                    <div className="container-btn-keybroad">
                        <Switch1 setStatusBtnSwitch={setStatusBtnSwitch} checkStatusBtnSwitch={checkStatusBtnSwitch} />
                        <div className="connect-keybroad">
                            <Keybroad setValueBtn={setValueBtn} />
                            <div className="btn-connect">
                                <button className="btn btn-primary"
                                    onClick={() => SetConnectData(!checkConnect)}
                                >{checkConnect === true ? 'Disconnect' : 'Connect'} </button>
                            </div>
                        </div>
                    </div>
                    <div className="footer-left">
                        <StepMotor />
                        <div> <i className="fa-solid fa-lightbulb" style={{ fontSize: 103 }}></i></div>
                        <Laptop />
                    </div>

                </div>
                <div className="lab-content-right">
                    <ChartValue gasLevel={gasLevel} x={10} />
                </div>
            </div>
        </div >
    );
}
export default LabIOT;