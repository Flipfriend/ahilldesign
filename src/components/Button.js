import '../components/ButtonStyles.css';
import iconArrow from '../assets/arrow-move.svg';


function Button({text}) {
    return (
        <button type="button" className="button">
            <div className="button-container">
               <h4 className='button-text'>{text}</h4>
            </div>
            <div className="icon-container">
                <img src={iconArrow}></img>
            </div>
        </button>
    )
}

export default Button;