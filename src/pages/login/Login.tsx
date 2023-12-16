import React from "react";
import { deepLogo } from "../../assets";

const Login: React.FC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };


  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[444px] shadow-md border border-solid border-[#EEE] h-fit p-[62px] rounded-[16px]">
        <div className="flex items-baseline gap-2 mb-[20px]">
          <img src={deepLogo} alt="Stack Logo" className="w-[50px]" />
          <h1 className="text-[28px] text-[#404040] font-bold">Stack</h1>
        </div>

        <h2 className="text-[20px] text-[#404040] font-semibold mb-[52px]">Sign up to join with Stack</h2>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-[20px]">
            <label className="form-control w-full max-w-xs gap-[6px]">
              <span className="text-gray-700 font-[14px]">Email</span>
              <input
                type="email"
                placeholder="Enter Email"
                className="input input-bordered w-full rounded-[8px] h-[44px] text-[#A9ACB5]"
              />
              <span className="font-light text-[14px] text-error">This field is required</span>
            </label>

            <label className="form-control w-full max-w-xs gap-[6px]">
              <span className="text-gray-700 font-[14px]">Password</span>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered w-full rounded-[8px] h-[44px] text-[#A9ACB5]"
              />
              <span className="font-light text-[14px] text-error">This field is required</span>
            </label>

            <div className="flex gap-[12px] justify-between">
              <div className="w-[43px] h-[4px] bg-[#F04438] rounded-[2px]"></div>
              <div className="w-[43px] h-[4px] bg-[#F04438] rounded-[2px]"></div>
              <div className="w-[43px] h-[4px] bg-[#F3F3F3] rounded-[2px]"></div>
              <div className="w-[43px] h-[4px] bg-[#F3F3F3] rounded-[2px]"></div>
              <div className="w-[43px] h-[4px] bg-[#F3F3F3] rounded-[2px]"></div>
              <div className="w-[43px] h-[4px] bg-[#F3F3F3] rounded-[2px]"></div>
            </div>

            <button className="btn btn-primary text-white rounded-[8px] text-[16px] h-[44px]">Sign Up</button>
          </div>
        </form>

        <p className="mt-[27px] text-[#B0B7C3]">Already have an account?
          <span className="text-[#377DFF] ml-1">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
