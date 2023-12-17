import React from 'react';
import { Link, useLocation, } from 'react-router-dom';
import { lightLogo, photo } from '../../assets';
import navbarData from '../../data/navbarData';
import { MdOutlineSettings } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";


interface IconProps {
    Item: React.ComponentType<any>;
}
const Icon: React.FC<IconProps> = ({ Item }) => {
    return <Item className='text-[22px] text-primary-light cursor-pointer' />
}

const Navbar: React.FC = () => {
    const { pathname } = useLocation()

    return (
        <div className='bg-primary h-[72px] flex justify-center text-[#FFF]'>
            <div className='w-[1280px] flex items-center justify-between'>
                <div className='flex items-center gap-20'>
                    <div className="flex items-start gap-2">
                        <img src={lightLogo} alt="Stack Logo" className="w-[40px]" />
                        <h1 className='text-[20px] font-bold'>Stack</h1>
                    </div>

                    <div className='flex gap-1'>
                        {navbarData.map(menu => (
                            <Link to={menu.link} key={menu.id}>
                                <span className={`py-[10px] px-[12px] font-[500] rounded-[6px] ${pathname === menu.link && 'bg-[#7F56D9]'}`}>
                                    {menu.item}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='flex items-center gap-[14px]'>
                    <Icon Item={FiSearch} />
                    <Icon Item={MdOutlineSettings} />
                    <Icon Item={FiBell} />
                    <img src={photo} alt="Younus Shamim" className='ml-2 rounded-full w-[40px] h-[40px] object-cover' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;