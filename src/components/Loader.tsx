import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loader: React.FC = () => {
    return (
        <div className='w-full h-[50vh] flex items-center justify-center'>
            <PuffLoader color="#a1a1a1" />
        </div>
    );
};

export default Loader;