import { Link, Outlet } from "react-router-dom";
import vesselsData from "./VesselsData";

const VesselsNavigation = () => (
    <>
    <nav>
        <ul>
            {/* <li>
                <Link to="/">Main</Link>
            </li> */}
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>

            {vesselsData.map((vessel, index) => (
                <li key={index}>
                    <Link to={`/vessel${index + 1}`}>{vessel.name}</Link>
                </li>
            ))}
            
        </ul>
    </nav>
    
    <hr></hr>
    <Outlet/>
    </>
);

export default VesselsNavigation;