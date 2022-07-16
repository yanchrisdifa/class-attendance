import "./sidebar.scss";
import { BsTable } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Login from "../login/login";
import Table from "../table/table";

const menus = require('../data/sidebar-menus.json')

const Sidebar = () => {
    const navigate = useNavigate()
    const activeMenuName = useParams()
    const location = useLocation()
    console.log('user active ', location.state.userActive)
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="user-profile-container">
                    <div className="profile-picture-container"></div>
                    <div className="profile-description-container">
                        <p className="user-name">Dimas Banser</p>
                        <p className="user-role">Class Leader</p>
                    </div>
                </div>
                <div className="menus-container">
                    <Link to="/">
                        {
                            menus.map((menu, index) => {
                                return <div className={`menu menu-${index + 1}`} key={index}>
                                    <BsTable/>
                                    <div className="label-container">
                                    {menu.label}
                                    </div>
                                </div>
                            })
                        }
                    </Link>
                </div>
            </div>
            <div className="sidebar-content">
                <Table/>
            </div>
        </div>
    )
}

export default Sidebar