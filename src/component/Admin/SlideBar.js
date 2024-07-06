import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./SlideBar.scss"
import React from "react";
import { Link } from 'react-router-dom';
const Slidebar = (props) => {
    return (
        <div className='slide-container'>
            <Sidebar
                collapsed={props.collapsed}
            //     toggled={props.collapsed}
            // // rtl
            // transitionDuration=
            >
                <div className='content-sidebar-center'>
                    <Menu>
                        <SubMenu label="Charts">
                            <MenuItem component={<Link to="/admins" />}> Dash Broad </MenuItem>
                            <MenuItem component={<Link to="/admins/users-manage" />}> User Manage </MenuItem>
                        </SubMenu>
                        <MenuItem> Documentation </MenuItem>
                        <MenuItem> Calendar </MenuItem>
                    </Menu>

                    <Menu>
                        <SubMenu label="Charts">
                            <MenuItem> Pie charts </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <MenuItem> Documentation </MenuItem>
                        <MenuItem> Calendar </MenuItem>
                    </Menu>
                </div>
                {props.collapsed === false ? <div className='sidebar-footer-container'>
                    <div className='sidebar-footer-content'>
                        <div className='sidebar-space'></div>
                        <div className='title-sidebar-footer'><span><i className="fa-regular fa-copyright"></i> Quickly Manage Question</span></div>
                    </div>
                </div> : <></>}

            </Sidebar>

        </div >

    );
}
export default Slidebar;