import React from "react";

interface Props {
}

const Progress: React.FC<Props> = () => {
  return (
    <div className="flex gap-[12px] justify-between">
      <div className="w-[43px] h-[4px] bg-[#F04438] rounded-[2px]"></div>
      <div className="w-[43px] h-[4px] bg-[#F04438] rounded-[2px]"></div>
      <div className="w-[43px] h-[4px] bg-[#F3F3F3] rounded-[2px]"></div>
      <div className="w-[43px] h-[4px] bg-[#F3F3F3] rounded-[2px]"></div>
      <div className="w-[43px] h-[4px] bg-[#F3F3F3] rounded-[2px]"></div>
      <div className="w-[43px] h-[4px] bg-[#F3F3F3] rounded-[2px]"></div>
    </div>
  );
};

export default Progress;
