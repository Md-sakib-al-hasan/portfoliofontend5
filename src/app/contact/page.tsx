"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaRegMap, FaSkype } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import create from "@/actions/create";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(20, "Message is required"),
});

const Contact_us = () => {
  const { control, handleSubmit, formState: { errors },reset } = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
      const newmessage= {
        name:data?.name,
        email:data?.email,
        description:data?.message,
      }
    try {
      const result = await create(newmessage, "/message/create-message"); 
      if (result.error) {
        toast.error("Error: " + result.error); 
      } else {
        toast.success("Thank you for sending me your opinion");
      }
    } catch (error) {
      toast.error("Error during API request: " + (error as Error).message);
    }

    reset();
   
  };

  return (
    <div>
      <div className="flex relative">
        <Toaster/>
        <div className="w-8/12 lg:h-[550px] h-[1000px]"></div>
        <div className="lg:w-4/12 dark:lg:bg-customBlue lg:bg-red-400 bg-white"></div>
        <div className="container xl:px-0 px-8 mx-auto absolute pt-16 inset-0 flex items-center">
          <div className="flex lg:flex-row flex-col gap-28">
            <div className="lg:w-6/12 w-full space-y-6">
              <h2 className="text-5xl font-semibold dark:text-customBlue text-customDark">Get In Touch</h2>
              <p>
                Feel free to reach out to us with any questions, comments, or concerns.
                We are here to help and look forward to hearing from you!
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-6">
                <div>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="border p-2 w-full focus:outline-none"
                        placeholder="Name"
                      />
                    )}
                  />
                  {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>

                <div>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="email"
                        className="border p-2 w-full focus:outline-none"
                        placeholder="Email"
                      />
                    )}
                  />
                  {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>

                <div>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className="border p-2 w-full focus:outline-none"
                        rows={4}
                        placeholder="Message"
                      />
                    )}
                  />
                  {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                </div>

                <button className="bg-customDark text-white py-2 px-4 rounded-md dark:bg-customBlue dark:text-customDark">
                  Submit
                </button>
              </form>
        
            </div>

            <div className="lg:w-6/12 w-full">
              <div className="bg-[#182c42] xl:w-9/12 w-full rounded-xl md:px-14 px-4 py-10 text-white font-semibold">
                <h2 className="text-4xl pb-10 pt-4">Contact info</h2>
                <ul className="space-y-8">
                  <li className="flex gap-5"><PiTelegramLogoLight size={25} /> mdsakibalhasa@gmail.com</li>
                  <li className="flex gap-5"><FaPhone size={25} /> 01625457343</li>
                  <li className="flex gap-5"><FaRegMap size={35} /> 22 Grandrose Street North Fort Myers, FL 33917</li>
                  <li className="flex gap-5"><FaSkype size={25} /> live:cycling.example</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14586.677838305395!2d90.26194453239447!3d23.936756051961762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbicycle%20store!5e0!3m2!1sen!2sbd!4v1738786843189!5m2!1sen!2sbd"
          className="w-full h-[450px] border-none"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact_us;
