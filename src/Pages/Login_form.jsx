/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const URL = "http://trip-mate-backend.onrender.com/auth/login-with-email";

function Login_form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    toast.success('login')
    try {
      await axios.post(URL, data).then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center p-5">
        <div className="w-96 h-96 border bg-white border-gray-300 shadow-lg rounded-lg py-7 px-5">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email address or phone number"
              className={`w-full py-4 px-4 rounded-md bg-slate-200 outline-none ${
                errors["email"] && "border border-red-500"
              }`}
            />
            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className={`w-full py-4 px-4 rounded-md bg-slate-200 outline-none ${
                errors["password"] && "border border-red-500"
              }`}
            />
            <button
              onClick={handleSubmit(onSubmit)}
              className="w-full bg-blue-500  py-3 rounded-lg font-bold text-white mt-6"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login_form;
