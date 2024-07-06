import './Point.scss'
const Point = (props) => {
   // console.log(props);
    return (
        <div className='container-point'>
            <div className='content-point'>
                <div className={props.color === "red" ? 'red' : props.color === "green" ? 'green' : 'black'}>

                </div>
            </div>
        </div>
    );

}
export default Point;
