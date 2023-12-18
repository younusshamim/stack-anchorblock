import React, { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import Brand from "../shared/Brand";
import { useOnLoginMutation } from "../../utils/api";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "../../redux/authSlice";

type Inputs = {
  email: string
  password: string
}

const Login: React.FC = () => {
  const dispatch = useDispatch()
  const [onLogin, { isLoading, isError }] = useOnLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const result = await onLogin({ email: data.email, password: data.password })
      if ('data' in result && result.data?.token) {
        dispatch(setLoggedInUser(result.data?.token));
        navigate('/users')
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[444px] shadow-lg border border-solid border-[#EEE] h-fit p-[62px] rounded-[16px]">
        <Brand />

        <h2 className="text-[20px]  text-[#404040] font-[600] mt-[20px] mb-[52px]">
          Sign In to continue with Stack
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[20px]">
            <Input
              label="Email"
              type="text"
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

            <PrimaryButton className="mt-[10px]" type="submit"> {isLoading ? 'Signing In..' : 'Sign In'}</PrimaryButton>

            {isError && (
              <p className="text-center font-medium text-error">
                {'An unexpected error occurred'}
              </p>
            )}
          </div>
        </form>

        <p className="mt-[27px] text-[#B0B7C3] font-[500]">Don't have an account ?
          <Link to="/register" className="text-[#377DFF] ml-1 cursor-pointer">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
