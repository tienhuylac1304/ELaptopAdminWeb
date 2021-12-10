import "./../css/Header.css"
import Logo from "./../../images/logo_E-Laptop_complete.png"

const Header = () => {
    return( <> 
    
    <div className="header_content">
        <a href="#">
            <span className="header_icon">
                <img src={Logo}></img>
            </span>
            <span className="header_title">
                E-Laptop
            </span>
        </a>
    </div>
    </>)
}

export default Header