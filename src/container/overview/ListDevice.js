import './ListDevice.scss';
const genderArr = (end) => {
    let arr = [];
    for (let i = 1; i <= end; i++) {
        arr[i] = i;
    }
    return arr;
}
// const listdevice = {
//     stt: genderArr(10),
//     namedevice: ['LCD', 'PIR', 'DHT11', 'BUZZER', 'MQ-02', 'MH', 'RGB', 'KEYBROAD', 'ARDUINO', 'STM32', '4G/5G', 'WIFI/BLE', 'LORA', 'RELAY', 'STEP MOTOR']
// }
const ListDevice = () => {
    return (
        <>
            <div className='infor-list-device-container'>
                <div className='infor-list-device-body'>
                    <div className='infor-list-device-content'>
                        <label className='title'>Thông tin đầy đủ về các thiết bị trong openLab</label>
                        <div className='table-container'>
                            <table className="table" >
                                <thead>
                                    <tr>
                                        <div className='tr-table'>
                                            <th scope="col">STT</th>
                                            <th scope="col">Tên thiết bị</th>
                                            <th scope="col">Datasheet</th>
                                        </div>

                                    </tr>
                                </thead>
                                <tbody className='tbody-table' >
                                    <tr >
                                        <div className='tr-table'>
                                            <th scope="row">1</th>
                                            <td>LCD</td>
                                            <td> <a href='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>
                                        </div>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>PIR</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>


                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>DHT11</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>BUZZER</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>


                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>MQ-02</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>


                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>MH</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>


                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>RGB</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>


                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>KEYBROAD</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>


                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>

                                        <td>ARDUINO</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">10</th>
                                        <td>STM32</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>


                                    </tr>
                                    <tr>
                                        <th scope="row">11</th>
                                        <td>4G/5G</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>


                                    </tr>
                                    <tr>
                                        <th scope="row">12</th>
                                        <td>WIFI/BLE</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>


                                    </tr>
                                    <tr>
                                        <th scope="row">13</th>
                                        <td>LORA/ZIGBEE</td>
                                        <td> <a href='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">14</th>
                                        <td>RELAY</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">15</th>
                                        <td>STEP MOTOR</td>
                                        <td> <a hreF='https://getbootstrap.com/docs/5.0/content/tables/' target='blank'>Truy cập trang chủ để xem thông tin chi tiết</a></td>


                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        {/* <button className='btn btn-primary'>primary</button> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default ListDevice;