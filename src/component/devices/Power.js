import './Power.scss'
const Power = (props) => {
    const { onPowerBtn, setOpenModal } = props;
    return (
        <div className="power-src-container"

        >
            <div className="power-src-body">
                <div className={onPowerBtn === true ? " power-src-content " : "display-power-lcd "}>
                    <span className="title-v">5.0 V</span>
                    <span className="title-a">0.0 A</span>
                </div>
            </div>
        </div>
    );
}
export default Power;