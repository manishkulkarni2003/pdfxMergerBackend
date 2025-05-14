import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <div>
            <ul className="ul">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/feature">Merge</Link></li>
                <li><Link to="/pdftoword">ConvertToWord</Link></li>
                
            </ul>
        </div>
        </>
    )
}

export default Navbar;