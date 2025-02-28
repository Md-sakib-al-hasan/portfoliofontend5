"use client"
import { useForm, SubmitHandler } from "react-hook-form";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const taskCategoriesArray = [
    "To-Do",
    "In Progress",
    "Completed",
    "High Priority",
    "Low Priority"
  ];
const navbaritem = [
   { name: 'Home', path: '/' },
   { name: 'Projects', path: '/projects' },
   { name: 'Blog', path: '/blog' },
   { name: 'Contact', path: '/contact' },
];

type FormInputs = {
   email: string;
};

const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = () => {
   
    // Handle your form submission here, e.g., send the email to your API
  };

  return (
    <div className="">
       <div className="container xl:px-0 px-8 mx-auto grid lg:grid-cols-4 md:grid-cols-2 lg:gap-4 gap-y-8 gap-x-6 py-20">
             <ul className="space-y-4">
                <Image src="/logo.svg" width={100} height={100} alt="logo"/>
                <li>any one any time contact me with this socilse mideya</li>
                <li className="flex gap-4">
                     <a href="https://www.facebook.com" className="text-gray-600 dark:hover:text-customBlue hover:text-red-500 hover:scale-125" target="_blank" rel="noopener noreferrer">
                        <TiSocialFacebook size={22} />
                     </a>
                     <a href="https://www.twitter.com" className="text-gray-600 dark:hover:text-customBlue hover:text-red-500  hover:scale-125" target="_blank" rel="noopener noreferrer">
                        <IoLogoTwitter size={22} />
                     </a>
                     <a href="https://plus.google.com" className="text-gray-600 dark:hover:text-customBlue hover:text-red-500  hover:scale-125" target="_blank" rel="noopener noreferrer">
                        <IoLogoGoogleplus size={22} />
                     </a>
                     <a href="https://www.linkedin.com" className="text-gray-600 dark:hover:text-customBlue hover:text-red-500  hover:scale-125" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn size={22} />
                     </a>
                  </li>
             </ul>

             <ul className="space-y-2">
                <h2 className="text-2xl font-medium">Categories</h2>
                {taskCategoriesArray.map((item, index) => (
                    <li className="hover:text-red-500  dark:hover:text-customBlue" key={index}>{item}</li>
                ))}
             </ul>

             <ul className="space-y-2">
                <h2 className="text-2xl font-medium">Overviews</h2>
                {navbaritem.map(item => (
                    <li key={item.name} className="hover:text-red-500 dark:hover:text-customBlue">
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                ))}
             </ul>

             <ul className="space-y-2">
                <li className="text-2xl font-medium">Newsletter</li>
                <p>Stay updated with the latest bicycles, exclusive deals, and special offers</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <input
                    className="border-none dark:bg-customBlue dark:placeholder:text-customDark bg-red-400 placeholder:text-white focus:outline-none py-2 px-2 mt-3"
                    placeholder="Enter your Email.."
                    type="email"
                    {...register("email", { required: "Email is required", pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, message: "Invalid email address" } })}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email?.message}</p>}
                  <span className="block w-6/12">
                    <button title="Subscribe" />
                  </span>
                </form>
             </ul>
       </div>
    </div>
  );
};

export default Footer;
