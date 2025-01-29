import { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const MainPageFromTask3 = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Current location is ', location);
    }, [location]);

    return (
        <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>Home page</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About page</NavLink>
                </li>
                
                
                
                {/* <li>
                    <button onClick={() => navigate('Home')}>Home page</button>
                </li>
                <li>
                    <button onClick={() => navigate('About')}>About page</button>
                </li> */}
            </ul>
        </nav>
        
        <Outlet/>
        <hr></hr>
        </>
    )
};

export default MainPageFromTask3;