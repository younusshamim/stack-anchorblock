import React, { useState } from 'react';
import { photo } from '../../assets';
import { IoMdArrowDown } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

interface UserData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface Props {
    data: UserData[];
    page: number;
    total_pages: number;
    setCurrPage: (page: number) => void;
}

const UsersList: React.FC<Props> = ({ data, page, total_pages, setCurrPage }) => {
    return (
        <div className="overflow-x-auto border border-gray-200 rounded-md shadow-sm ring-1 ring-opacity-50 ring-gray-200">
            <table className="table">
                <thead className='bg-gray-50'>
                    <tr className='border-b-gray-200'>
                        <th className='py-[12px] px-[24px]'>
                            <label className='flex items-center gap-1'>
                                <input
                                    type="checkbox"
                                    className="checkbox mr-2 checkbox-primary checkbox-sm rounded-md "
                                />
                                <span className='text-gray-500 text-[12px] font-[500]'>User Info</span>
                                <IoMdArrowDown className='text-gray-500 text-[16px]' />
                            </label>
                        </th>
                        <th className='text-gray-500 text-[12px] font-[500] py-[12px] px-[24px]'>About</th>
                        <th className='text-gray-500 text-[12px] font-[500] py-[12px] px-[24px]'>Satus</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((user, index) => (
                        <tr className='border-b-gray-200' key={index}>
                            <td className='flex items-center gap-4 py-[16px] px-[24px]'>
                                <label>
                                    <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded-md" />
                                </label>

                                <div className="flex items-center gap-3">
                                    <img src={user.avatar} alt="Avatar Tailwind CSS Component" className='w-[40px] h-[40px] rounded-full object-cover' />

                                    <div>
                                        <div className="text-[14px] font-[500] text-gray-900">{`${user.first_name} ${user.last_name}`}</div>
                                        <div className="text-[14px] font-[400] text-gray-400">{user.email}</div>
                                    </div>
                                </div>
                            </td>

                            <td className='py-[16px] px-[24px]'>
                                <div className="text-[14px] font-[400] text-gray-900">Some dummy Content</div>
                                <div className="text-[14px] font-[400] text-gray-500" >Brings all your news into one place</div>
                            </td>

                            <td className='flex justify-between py-[16px] px-[24px]'>
                                <div className="text-[12px] font-[500] text-success bg-success-light h-[22px] w-fit px-[8px] rounded-lg">Customer</div>
                                <div className='flex gap-5'>
                                    <FaRegTrashAlt className='text-[18px] text-gray-500 cursor-pointer' />
                                    <FiEdit2 className='text-[18px] text-gray-500 cursor-pointer' />
                                </div>
                            </td>
                        </tr>

                    ))}

                    <tr className='border-b-gray-200'>
                        <td className='flex items-center gap-4 py-[14px] px-[24px]'>
                            <button
                                disabled={page === 1}
                                onClick={() => setCurrPage(page - 1)}
                                className='btn rounded-[8px] h-[36px] min-h-[36px] px-[14px] text-[14px] font-[500] border-gray-200 text-gray-700'
                            >
                                Previous
                            </button>
                        </td>

                        <td className='py-[14px] px-[24px]'>
                            <div className="text-[14px] font-[500] text-gray-700 text-center">Page {page} of {total_pages}</div>
                        </td>

                        <td className='flex justify-end py-[14px] px-[24px]'>
                            <button
                                disabled={page === total_pages}
                                onClick={() => setCurrPage(page + 1)}
                                className='btn rounded-[8px] h-[36px] min-h-[36px] px-[14px] text-[14px] font-[500] border-gray-200  text-gray-700'
                            >
                                Next
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;