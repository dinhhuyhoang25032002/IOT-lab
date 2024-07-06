import buzzer from '../../assets/device-imge/Buzzer.png'
const Buzzer = () => {
    return (
        <div style={{ width: 100, height: 100 }}>
            <img style={{  width: 100, height: 100,objectFit: 'contain' }} src={buzzer} />
        </div>
    );
}
export default Buzzer;