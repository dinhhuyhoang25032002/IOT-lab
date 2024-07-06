
const Led = (props) => {
    const { fontSize, color } = props;
    return (
        <>
            <div className='led-container'>
                <div className={color === "red" ? 'red' : color === "green" ? 'green' : 'yellow'}>
                    <i class='bx bxs-bell' style={{ fontSize: fontSize, color: color }}></i>
                </div>
            </div>

        </>
    );

}
export default Led; 