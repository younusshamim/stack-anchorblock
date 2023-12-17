import React from 'react';
import { FiPlus, FiUploadCloud } from 'react-icons/fi';

const UsersHeading: React.FC = () => {
    return (
        <div className="flex justify-between mb-[33px]">
            <h2 className="text-[24px] font-[500] text-gray-900">Users</h2>

            <div className="flex items-center gap-3">
                <button className="btn rounded-[8px] h-[40px] min-h-[40px] px-[16px] text-[14px] font-[600] border-gray-300">
                    <FiUploadCloud className="text-[20px]" />  Import
                </button>

                <button className="btn btn-primary rounded-[8px] h-[40px] min-h-[40px] px-[16px] text-[14px] font-[600] text-white">
                    <FiPlus className="text-[20px]" />  Add User
                </button>
            </div>
        </div>
    );
};

export default UsersHeading;