import React from 'react'
import {
    Link
} from "react-router-dom";

export default function NavBar() {
    const toggleSidebar = () => {
        document.getElementById("sidebar").classList.toggle("d-none");
    }
    return (
        < >
            <nav className="navbar row navbar-expand-lg navbar-dark " style={{background:"#0abf53"}}>

                <div className="container-fluid  ms-auto col-10">
                    <Link className="navbar-brand " to={"/admin"}>FarmEasy</Link>
                 
                    <div className=" pe-5" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-1 mb-lg-0">
                            <div className="col-1 ">
                                <button onClick={toggleSidebar} className="px-2 py-1 btn btn-light rounded">
                                    <i className="fa-solid fa-bars fa-xl"></i>
                                </button>
                            </div>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}
