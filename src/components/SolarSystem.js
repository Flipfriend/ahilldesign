import handWrap from '../assets/Handswrap.svg';
import SolarSystemImage from '../assets/solar.system.png';
import './SolarSystemStyles.css';

function SolarSystem (){
    return (
       <div className='image-container'>
            <img className='SolarSystemImage' src={SolarSystemImage} alt="Solar System"></img>
            <img className='handWrap' src={handWrap} alt="Bandaged Hand"></img>
        </div>
    )
}

export default SolarSystem;