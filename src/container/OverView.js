import './OverView.scss'
import LCD_Display from './overview/LCD_Display';
import MediaBlock from './overview/MediaBlock';
import PowerBlock from './overview/PowerBlock';
import InputSensor from './overview/InputSensor';
import ControlBlock from './overview/ControlBlock';
import EnforcementBlock from './overview/EnforcementBlock';

import React, { useState } from 'react';

const OverView = (props) => {
    // const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
    // const OnMouseMove = (event) => {
    //     console.log('check event:', event);
    //     setCursorPosition({ top: (event.screenY / 2), left: event.screenX });
    // }

    // return (<>
    //     <div onMouseMove={(event) => OnMouseMove(event)} onClick={() => setIsOpen(true)} className='parent'>sgafgsdgsa
    //     </div>
    //     {isOpen === true ? <InforDevice className='child' style={{ position: 'absolute', ...cursorPosition }} >dsfasdf</div> : <></>}
    // </>
    // )

    return (
        <div className='container-view'>
            <div className=' body-view'>
                <div className='content-view'>
                    <div className=' left-content'>
                        <div className='top'>
                            <PowerBlock />
                            <LCD_Display  />
                        </div>
                        <div className='bottom'>
                            <InputSensor />
                            <ControlBlock  />
                        </div>
                    </div>
                    <div className='right-content'>
                        <MediaBlock  />
                        <EnforcementBlock />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OverView;