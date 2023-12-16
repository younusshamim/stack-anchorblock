import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string
}

const PrimaryButton: React.FC<Props> = ({ children, className }) => {
  return (
    <button className={`btn btn-primary text-white rounded-[8px] text-[16px] h-[44px] ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
