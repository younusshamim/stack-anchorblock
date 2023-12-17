import React from 'react';
import { deepLogo, } from '../../assets';

const Brand: React.FC = () => {
    return (
        <div className="flex items-baseline gap-2">
            <img src={deepLogo} alt="Stack Logo" className="w-[50px]" />
            <h1 className='text-[28px] font-bold text-[#404040]'>Stack</h1>
        </div>
    );
};

export default Brand;

