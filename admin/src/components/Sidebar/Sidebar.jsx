import React from "react";
import "./sidebar.css";
import { Home, ShoppingCart, Users, Settings, LogOut, CirclePlus } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h2 className="sidebar-title">Admin Panel</h2>

        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Home size={20} /> <span>Dashboard</span>
          </li>
          
          <li className="sidebar-item">
            <CirclePlus size={20}/> <span>Add Items</span>
          </li>
          
          <li className="sidebar-item">
            <ShoppingCart size={20} /> <span>Orders</span>
          </li>

          <li className="sidebar-item">
            <Users size={20} /> <span>Users</span>
          </li>
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