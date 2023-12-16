import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    register: UseFormRegister<any>;
    registerKey: string
    validation?: { required?: string; }
    error?: string
}

const Input: React.FC<Props> = ({ label, register, registerKey, validation, error, ...rest }) => {
    return (
        <label className="form-control w-full max-w-xs gap-[6px]">
            <span className="text-gray-700 font-[14px]">{label}</span>
            <input
                {...rest}
                {...(register(registerKey, { ...validation }))}
                className={`p-4 w-full rounded-[8px] h-[44px] text-[#A9ACB5] border ring-4 ring-opacity-50 focus:outline-none  
                ${error ? 'border-error-light shadow-outline-error-extra-light ring-error-extra-light'
                        : 'border-primary-light shadow-outline-primary-extra-light ring-primary-extra-light'}`}
            />

            {error && <span className="font-light text-[14px] text-error">
                {error}
            </span>}
        </label>
    );
};

export default Input;