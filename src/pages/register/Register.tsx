import React from "react";
import { deepLogo } from "../../assets";
import Input from "../../components/Input";
import Progress from "./Progress";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string
  password: string
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[444px] shadow-lg border border-solid border-[#EEE] h-fit p-[62px] rounded-[16px]">
        <div className="flex items-baseline gap-2 mb-[20px]">
          <img src={deepLogo} alt="Stack Logo" className="w-[50px]" />
          <h1 className="text-[28px] text-[#404040] font-bold">Stack</h1>
        </div>

        <h2 className="text-[20px] text-[#404040] font-[600] mb-[52px]">Sign up to join with Stack</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[20px]">
            <Input
              label="Email"
              type="email"
              placeholder="Enter Email"
              register={register}
              registerKey="email"
              validation={{ required: 'This field is required' }}
              error={errors?.email?.message}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
              register={register}
              registerKey="password"
              validation={{ required: 'This field is required' }}
              error={errors?.password?.message}
            />


            <Progress />
            <PrimaryButton type="submit">Sign Up</PrimaryButton>
          </div>
        </form>

        <p className="mt-[27px] text-[#B0B7C3]  font-[500]">Already have an account?
          <Link to="/login" className="text-[#377DFF] ml-1 cursor-pointer">Sign In</Link>
        </p>
      </div>
    </div>);
};

export default Register;
