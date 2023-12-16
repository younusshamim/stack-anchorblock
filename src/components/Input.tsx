import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Input: React.FC<Props> = ({ label, ...rest }) => {
    return (
        <label className="form-control w-full max-w-xs gap-[6px]">
            <span className="text-gray-700 font-[14px]">{label}</span>
            <input
                {...rest}
                className="input input-bordered w-full rounded-[8px] h-[44px] text-[#A9ACB5]"
            />
            <span className="font-light text-[14px] text-error">This field is required</span>
        </label>
    );
};

export default Input;