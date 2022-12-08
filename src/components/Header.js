import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css"
function Header()
{
    return(
        <>
        <div id="header">
            <span className="logo">Instagram</span>            
            <span className="social-icon">
            <FontAwesomeIcon icon={faFacebookMessenger} />
            </span>
        </div>



        </>
    )


}
export default Header;