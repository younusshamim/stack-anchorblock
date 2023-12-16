import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button
      className={`btn btn-primary text-white rounded-[8px] text-[16px] h-[44px] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
