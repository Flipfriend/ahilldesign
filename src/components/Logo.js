import '../components/LogoStyles.css';
import aArrow from '../assets/a-arrow.svg';
import wordmark from '../assets/wordmark.svg';

function Logo(){
    return (
        <div className="logo">
            <img src={aArrow}></img>
            <img src={wordmark}></img>
        </div>
    );
}

export default Logo;