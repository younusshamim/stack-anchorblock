import React from 'react';

interface Props {
    message: string;
}

const Error: React.FC<Props> = ({ message }) => {
    return (
        <div className='w-full h-[50vh] flex items-center justify-center'>
            <p className='font-[600]'>{message}</p>
        </div>
    );
};

export default Error;