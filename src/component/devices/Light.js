const Light = (props) => {
    const { fontSize, color } = props;
    return (
        <div className="Light-container">
            <i style={{ fontSize: fontSize, color: color }} className="fa-solid fa-lightbulb"></i>
        </div>
    );
}
export default Light;