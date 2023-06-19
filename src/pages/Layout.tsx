import NavBar from "../components/UI/NavBar";


import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}

export default Layout;
