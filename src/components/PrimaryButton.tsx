import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PrimaryButton: React.FC<Props> = ({ children }) => {
  return <button>{children}</button>;
};

export default PrimaryButton;
