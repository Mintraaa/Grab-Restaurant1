import {Outlet} from "react-router-dom";
import {AuthProvider} from "../context/AuthContext";
import  NavBar from "./Navbar";
import Footer from "./Footer";
 
const Layout = () => {
    return(
        <AuthProvider>
            <NavBar />
            <div className="h-screen">
            <Outlet />
            </div>
            <Footer/>
        </AuthProvider>
    );
};

export default Layout;