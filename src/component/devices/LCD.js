import "./LCD.scss"
const LCD = (props) => {
    const { checkConnect, gasLevel, onPowerBtn, valueBtn } = props;
  
    return (
        <div className="lcd-area" >
            <div className="lcd-border">
                <div className="lcd-container">
                    <div className="lcd-content">
                        {onPowerBtn === true ?
                            checkConnect === true ? <span>{gasLevel}%</span> : valueBtn
                            : <span></span>}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LCD;