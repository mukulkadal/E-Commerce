/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";

const URL ="http://trip-mate-backend.onrender.com/auth/login-with-email"
const Forms = () => {

  const {register, handleSubmit, formState:{errors},} = useForm()

  const onSubmit = async (data) =>{
await axios.post(URL,data).then((res) => console.log(res));
  } 


  return (
    <>
      <div className=" w-full h-screen flex justify-center items-center p-5">
        <div className="w-96 h-96 border bg-white border-gray-300 shadow-lg rounded-lg py-7 px-5">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              {...register("email",{required: true})}
              placeholder="Email address or phone number"
              className="w-full py-4 px-4 rounded-md bg-slate-200 outline-none"
            />
            <input
              type="password"
              {...register("password",{required: true})}
              placeholder="Password"
              className="w-full py-4 px-4 rounded-md bg-slate-200 outline-none"
            />
            <button onClick={handleSubmit(onSubmit)} className="w-full bg-yellow-500  py-3 rounded-lg font-bold text-white mt-6">
              Log in
            </button>


          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
