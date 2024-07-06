import "./Keybroad.scss"
import React from "react";

const Keybroad = (props) => {
    const  setValueBtn = props.setValueBtn;
    
    return (
        <div className="keybroad-container">
            <div className="keybroad-content">
                <div className="content-button">
                    <button onClick={(event) => setValueBtn(event.target.value)} value={1} className="btn-style" >1</button>
                    <button onClick={(event) => setValueBtn(event.target.value)} value={2} className="btn-style" >2</button>
                    <button onClick={(event) => setValueBtn(event.target.value)} value={3} className="btn-style">3</button>
                </div>
                <div className="content-button">
                    <button onClick={(event) => setValueBtn(event.target.value)} value={4} className="btn-style">4</button>
                    <button onClick={(event) => setValueBtn(event.target.value)} value={5} className="btn-style">5</button>
                    <button onClick={(event) => setValueBtn(event.target.value)} value={6} className="btn-style">6</button>
                </div>
                <div className="content-button">
                    <button onClick={(event) => setValueBtn(event.target.value)} value={7} className="btn-style">7</button>
                    <button onClick={(event) => setValueBtn(event.target.value)} value={8} className="btn-style">8</button>
                    <button onClick={(event) => setValueBtn(event.target.value)} value={9} className="btn-style">9</button>
                </div>
                <div className="content-button">
                    <button onClick={(event) => setValueBtn(event.target.value)} value={"*"} className="btn-style">*</button>
                    <button onClick={(event) => setValueBtn(event.target.value)} value={0} className="btn-style">0</button>
                    <button onClick={(event) => setValueBtn(event.target.value)} value={"#"} className="btn-style">#</button>
                </div>
            </div>
        </div>
    );
}
export default Keybroad;