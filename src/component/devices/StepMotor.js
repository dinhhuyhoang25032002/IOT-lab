import './StepMotor.scss'
const StepMotor = () => {
    return (
        <div className="fan">
            <i className='bx bx-cross ' style={{ fontSize: 82, textAlign: "center", zIndex: "2" }}></i>
            {/* bx-spin */}

            <div className="relay-container">
                <div className="content-relay">
                    <div className="relay-top">
                        <div className="relay-left"><i className='bx bxs-plus-circle' ></i></div>
                        <div className="relay-center" style={{ textAlign: "center" }}>    <i className="fa-regular fa-circle-dot" ></i></div>
                        <div className="relay-right"><i className='bx bxs-plus-circle' ></i></div>
                    </div>
                    <div className="relay-buttom"></div>
                </div>
            </div>
        </div>
    );
}
export default StepMotor;