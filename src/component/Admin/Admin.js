import SlideBar from "./SlideBar";
import React, { useState } from "react";
import "./Admin.scss"
import { Outlet } from 'react-router-dom';
const Admin = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="admin-body">
            <div className="admin-container ">
                <div className="sidebar-container">
                    <SlideBar collapsed={collapsed} />
                </div>
                <div className="admin-content">
                    <div className="btn-collapsed"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        {/* <i className="fa-solid fa-bars"></i> */}
                    </div>
                    <div className="admin-main">
                        <div>
                            <Outlet/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default Admin;