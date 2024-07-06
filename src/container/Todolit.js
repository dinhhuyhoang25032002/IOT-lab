import React, { useState } from 'react';

const Todolit = (props) => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <div><span>Todolit</span></div>
            <div>{value}</div>
            <div >
                <button onClick={() => setValue(prevState => prevState + 1)}>increase</button>
                <button onClick={() => setValue(prevState => prevState - 1)}>reduce</button>
            </div>
        </div>
    );
}

export default Todolit;