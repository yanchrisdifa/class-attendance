import "./sidebar.scss";
import { BsTable } from 'react-icons/bs';
import { Link, Outlet } from "react-router-dom";
import React from "react";

const menus = require('../data/sidebar-menus.json');

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-content-container">
            <div className="sidebar-container">
                <div className="user-profile-container">
                    <div className="profile-picture-container"></div>
                    <div className="profile-description-container">
                        <p className="user-name">Dimas Banser</p>
                        <p className="user-role">Class Leader</p>
                    </div>
                </div>
                <div className="menus-container">
                        {
                            menus.map((menu, index) => {
                                return <div className={`menu menu-${index + 1}`} key={index}>
                                    <Link to={menu.route} className={`link link-${index + 1}`}>
                                        <BsTable/>
                                        <div className="label-container">
                                        {menu.label}
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                </div>
            </div>
            </div>
            <div className="sidebar-content">
                <Outlet/>
            </div>
        </div>
    )
}


export default Sidebar