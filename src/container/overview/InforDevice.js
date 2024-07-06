import React from "react";
import './InforDevice.scss'
import { useNavigate } from 'react-router-dom';
import { CommonUtils } from "../../utils";
const InforDevice = (props) => {
    const { isOpen } = props;
    const navigate = useNavigate();
    const handleListInfor = () => {
        navigate('/clients/list-infor-device');
    }
    const handleUpdateImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file)
            // console.log('chech data image: ', base64)
            let objectUrl = URL.createObjectURL(file);
            // this.setState({
            //     updateImage: objectUrl,
            //     avatar: base64
            // })
        }
    }
    return (
        <div className={isOpen === true ? 'infor-container open' : 'infor-container'}>
            <div className="infor-content">
                <div className="title">
                    <span onClick={() => handleListInfor()} >
                        <i style={{ fontSize: 14, fontWeight: 600 }} className='bx bx-notepad'></i>
                        Xem thông tin thiết bị
                    </span>
                </div>
                <div className="title">
                    <div class="input-group">
                        <input type="file" class="form-control" id="inputGroupFile02" hidden />
                        <label className='input-label' for="inputGroupFile02">
                            <i style={{ fontSize: 14, fontWeight: 600 }} className='bx bx-code-alt'></i> Code trong IDE
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default InforDevice;