import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
         <div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="mt-4">
          <Outlet />
        </div>
        <Footer/>
      </div>

      <ToastContainer/>
    </div>
    );
};

export default MainLayout;