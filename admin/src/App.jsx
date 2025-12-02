import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Sidebar from './components/sidebar/sidebar.jsx'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
      <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>
      </Routes>
      <ToastContainer
          position="top-right"
          autoClose={2000}
          className="custom-toast-container"
          toastClassName="custom-toast"
          bodyClassName="custom-toast-body"
      />
      </div>
    </div>
  )
}

export default App