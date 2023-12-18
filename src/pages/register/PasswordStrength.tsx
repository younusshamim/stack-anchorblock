import React from "react";

interface Props {
  password: string
}

const PasswordStrength: React.FC<Props> = ({ password }) => {
  const getPasswordStatus = () => {
    const length = password.length;
    const hasChar = /[A-Za-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    if (length >= 8 && hasChar && hasNumber && hasSymbol) return 'strongest'
    else if (length >= 8) return 'strong'
    else return 'normal';
  };

  const getBgColors = () => {
    const status = getPasswordStatus()
    const arrlist = ['', '', '', '', '', '']

    if (status === 'strongest') {
      return arrlist.map((_, i) => {
        return 'bg-success'
      })
    } else if (status === 'strong') {
      return arrlist.map((_, i) => {
        if (i <= 3) return 'bg-blue-600'
        else return 'bg-[#F3F3F3]'
      })
    }
    else {
      return arrlist.map((_, i) => {
        if (i <= 1) return 'bg-[#F04438]'
        else return 'bg-[#F3F3F3]'
      })
    }
  }

  return (
    <div className="flex gap-[12px] justify-between">
      {getBgColors().map((bgColor, i) => {
        return <div key={i} className={`w-[43px] h-[4px] rounded-[2px] ${bgColor}`}></div>
      })}
    </div>
  );
};

export default PasswordStrength;
