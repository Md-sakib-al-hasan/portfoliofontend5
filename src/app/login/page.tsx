"use client";

import { GrGithub } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { InputField } from "@/components/customUi/InputField";
import { PasswordField } from "@/components/customUi/InputPasswordFiled";
import { signIn } from "next-auth/react"
import  { Toaster } from "react-hot-toast";
import { toast as toastmessage } from 'sonner';
const LoginPage = () => {
 
 
 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
   

    try {
       
      await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"), 
        redirect: true,
        callbackUrl: `${process.env.NEXT_PUBLIC_DOMAIN_FRONTEND}/drashboard`,
      });
    } catch (error) {
      toastmessage.error((error as Error).message ||"some think is wrong") 
    }
    
    

  };
  
  return (
    <div className="bg-[#2A284D] dark:bg-customDark">
       <Toaster/>
      <div className="flex h-screen  relative max-w-[1280px] mx-auto ">
       <div className=" hidden sm:block absolute xl:top-20 top:-10 lg:right-2/4 bg-gradient-to-r from-[#01ECA9] to-[#3757F8] w-[100px] h-[100px]  rounded-full"></div>
       <div className=" hidden sm:block absolute  bg-gradient-to-r from-[#01ECA9] to-[#3757F8]  xl:bottom-20 bottom-0 right-0 xl:right-28 w-[100px] h-[100px] bg-red-400 rounded-full"></div>
      {/* Left Side - Welcome Text (Hidden on Mobile & Tablet) */}
      <div className="w-11/12 hidden lg:flex items-center justify-center text-white p-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to TaskFlow Solutions!</h1>
          <p className="mt-4 text-lg">
            Sign in to continue and explore amazing features.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form (Full Width on Mobile & Tablet) */}
      <div className="w-full  lg:w-8/11 flex items-center justify-center md:p-10">
        <div className="w-full md:h-auto h-screen space-y-8 max-w-md px-8 py-16 shadow-lg rounded-lg bg-white/10 backdrop-blur-lg border border-white/30">
          <h2 className="text-2xl font-bold text-center text-white">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField label="Email" name="email" type="email" placeholder="Enter your email" />
            <PasswordField label="Password" name="password" />
            <button
              type="submit"
              
              className="w-full text-white cursor-pointer font-bold py-1 px-4 rounded mt-4 bg-gradient-to-r from-[#01ECA9] to-[#3757F8]"
            >
              { "Login"}
            </button>
          </form>
          <hr className="bg-gradient-to-r rounded-lg from-[#01ECA9] to-[#3757F8] h-1 border-none" />
          <div className="flex justify-center gap-2">
          <button onClick={() => toastmessage.info("GitHub login is currently restricted to selected users.")}><GrGithub size={30} /></button>
          <button onClick={() => toastmessage.info("Google login is currently restricted to selected users.")}><FcGoogle size={30} /></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;