import './Switch.scss'

const Switch1 = (props) => {
    const { setStatusBtnSwitch, checkStatusBtnSwitch } = props;
    return (
        <div className="btn-container">
            <button className={checkStatusBtnSwitch === true ? "btn-switch active" : "btn-switch"}
            >
            </button>
        </div>
    );
}
export default Switch1;