import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className='w-[1280px] mx-auto my-[33px]'>
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;