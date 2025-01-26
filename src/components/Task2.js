import { Link, Outlet } from "react-router-dom";

const MainPageFromTask2 = () => (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Main</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
    <hr></hr>
    <Outlet/>
    <hr></hr>
    </>
);

export default MainPageFromTask2;