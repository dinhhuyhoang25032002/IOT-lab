import './BtnPower.scss'
const BtnPower = (props) => {
    const { handleChangePowerBtn } = props;
    return (
        <div className="btn-power-container">
            <button className="btn-content"
            // onClick={() => handleChangePowerBtn()}
            >
                <i className="fa fa-power-off" aria-hidden="true"></i>
            </button>
        </div>
    );
}
export default BtnPower;