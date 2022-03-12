import {Link} from "react-router-dom";

const TopNavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to = {"/home"}>Home</Link>
                </li>
                <li>
                    <Link to = {"/about"}>About</Link>
                </li>
                <li>
                    <Link to = {"/shop/abd/dsds"}>Shop</Link>
                </li>
            </ul>
        </nav>
    )
}

export default TopNavBar;