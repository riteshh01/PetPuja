import React from "react";
import "./sidebar.css";
import { Home, ShoppingCart, Users, NotebookTabs, LogOut, CirclePlus } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h2 className="sidebar-title">Admin Panel</h2>

        <ul className="sidebar-menu">
          <NavLink to='/dashboard' className="sidebar-item">
            <Home size={20} /> <span>Dashboard</span>
          </NavLink>

          <NavLink to='/add' className="sidebar-item">
            <CirclePlus size={20} /> <span>Add Items</span>
          </NavLink>

          <NavLink to='/list' className="sidebar-item">
            <NotebookTabs size={20} /> <span>List Items</span>
          </NavLink>
          

          <NavLink to='/orders' className="sidebar-item">
            <Users size={20} /> <span>Orders</span>
          </NavLink>
        </ul>
      </div>

      <div className="sidebar-bottom">
        <li className="sidebar-item logout">
          <LogOut size={20} /> <span>Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;