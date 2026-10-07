import LinkedinIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';
import DribbbleIcon from'../assets/dribbble.svg';
import './FooterStyles.css';


function Footer () {
    return (
        <div className="footer">
            <div className="email-container email-left">
            <a className="email" href="mailto: andrew@ahilldesign.com">andrew@ahilldesign.com</a>
            </div>
            <div className="icon-group">
                <div className="social-links">
                    <img className="social-icon" src={LinkedinIcon} alt='Linkdin Logo'/>
                    <img className="social-icon" src={GithubIcon} alt='Github Logo'/>
                    <img className="social-icon" src={DribbbleIcon} alt='Dribbble Logo'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;