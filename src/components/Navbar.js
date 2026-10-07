import Logo from "./Logo";
import './NavbarStyles.css';

function Navbar(){
return (
    <nav className="nav">
        <a href= "index.html"><Logo/></a>
        <ul>
            <li className="listNav">
                <div className="email-container"> 
                    <a className="email" href="mailto: andrew@ahilldesign.com">andrew@ahilldesign.com</a>
                </div>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;